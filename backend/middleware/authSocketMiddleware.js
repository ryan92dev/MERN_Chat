const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendError = require("../utils/sendError");

const authSocketMiddleware = asyncHandler(async (socket, next) => {
  const token = socket.handshake.auth.token;

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_JWT_SECRET);

    socket.user = decoded;
    next();
  } catch (error) {
    return sendError(res, "Not authorized", 401);
  }
});

module.exports = authSocketMiddleware;
