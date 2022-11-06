const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const sendError = require("../../utils/sendError");

const refreshTokenController = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies;
  const { persist } = req.body;

  // Check if refresh token exists
  if (!refreshToken) return sendError(res, "Unauthorized", 403);

  // Clear refresh token
  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.COOKIE_SECURE,
  });

  // Find user with refresh token
  const userFound = await User.findOne({
    refreshToken: { $in: [refreshToken] },
  });

  // Reuse detected refresh token (Remove all refreh tokens from user)
  if (!userFound) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_JWT_SECRET,
      async (err, decoded) => {
        if (err) return sendError(res, "Unauthorized", 403);

        const { id } = decoded;
        const hackedUser = await User.findById(id);
        if (hackedUser) {
          hackedUser.refreshToken = [];
          await hackedUser.save();
        }
      }
    );
    return sendError(res, "Unauthorized", 403);
  }

  // Create a new refresh token array and filter out the old refresh token
  const newRefreshTokenArray = userFound.refreshToken.filter(
    (token) => token !== refreshToken
  );

  // Verify refresh token
  jwt.verify(
    refreshToken,
    process.env.REFRESH_JWT_SECRET,
    async (err, decoded) => {
      if (err) {
        userFound.refreshToken = [...newRefreshTokenArray];
        await userFound.save();
        return sendError(res, "Unauthorized", 403);
      }

      const { id, email } = decoded;
      if (id !== userFound._id.toString()) {
        userFound.refreshToken = [...newRefreshTokenArray];
        await userFound.save();
        return sendError(res, "Unauthorized", 403);
      }

      // Create new access token if refresh token is valid
      const accessToken = jwt.sign(
        { id: userFound._id, email: userFound.email },
        process.env.ACCESS_JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      let newRefreshToken = null;

      // Create new refresh token if refresh token is valid (if persist is true)
      if (persist) {
        newRefreshToken = jwt.sign(
          { id: userFound._id, email: userFound.email },
          process.env.REFRESH_JWT_SECRET,
          {
            expiresIn: "30d",
          }
        );
      } else {
        newRefreshToken = jwt.sign(
          { id: userFound._id, email: userFound.email },
          process.env.REFRESH_JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
      }

      // Save new refresh token to database
      userFound.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      await userFound.save();

      // Send new access token and refresh token to client

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
        user: userFound,
      });
    }
  );
});

module.exports = refreshTokenController;
