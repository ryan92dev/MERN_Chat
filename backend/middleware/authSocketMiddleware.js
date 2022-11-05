const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendError = require("../utils/sendError");

const authSocketMiddleware = asyncHandler(async (socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) return sendError(socket, "Not authorized", 401);

  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_JWT_SECRET,
      (err, decoded) => {
        if (err) return sendError(socket, "Not authorized", 401);

        return decoded;
      }
    );

    socket.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return sendError(socket, "Not authorized", 401);
  }
});

module.exports = authSocketMiddleware;
