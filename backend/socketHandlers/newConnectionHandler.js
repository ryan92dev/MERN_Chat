const serverStore = require("../serverStore");
const asyncHandler = require("express-async-handler");

const newConnectionHandler = asyncHandler(async (socket, io) => {
  const user = socket.user;

  if (!user) return;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: user._id,
  });
});

module.exports = newConnectionHandler;
