const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const sendError = require("../../utils/sendError");

const loginController = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies;
  const { persist } = req.body;

  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) return sendError(res, "Invalid credentials", 401);

  // Check if password matches
  const isMatch = await user.comparePassword(password);
  if (!isMatch) return sendError(res, "Invalid credentials", 401);

  /// Create Access token
  const accessToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.ACCESS_JWT_SECRET,
    {
      expiresIn: "5min",
    }
  );

  let newRefreshToken = null;

  // Create Refresh Token (If persist is true)
  if (persist) {
    newRefreshToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.REFRESH_JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
  } else {
    newRefreshToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.REFRESH_JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
  }

  // Check if refresh token exists in database
  const newRefreshTokenArray = !refreshToken
    ? user.refreshToken
    : user.refreshToken.filter((token) => token !== refreshToken);

  if (refreshToken) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "none",
      secure: process.env.COOKIE_SECURE,
    });
  }

  // Save refresh token to database
  user.refreshToken = [...newRefreshTokenArray, newRefreshToken];
  await user.save();

  if (persist) {
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: process.env.COOKIE_SECURE,

      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
  } else {
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: process.env.COOKIE_SECURE,

      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
    });
  }

  res.status(200).json({
    success: true,
    accessToken,
    user: user,
  });
});

module.exports = loginController;
