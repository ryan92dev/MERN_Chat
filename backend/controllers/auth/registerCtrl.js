const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const sendError = require("../../utils/sendError");

const registerController = asyncHandler(async (req, res) => {
  const { jobTitle, firstName, lastName, username, email, password } = req.body;

  // Check if user exists
  const userExists = await User.findOne({
    $or: [{ username }, { email: email.toLowerCase() }],
  });
  if (userExists) return sendError(res, "User already exists", 400);

  // Create user
  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password,
    firstName,
    lastName,
    jobTitle,
  });

  // Send response
  res.status(201).json({
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      jobTitle: user.jobTitle,
    },
  });
});

module.exports = registerController;
