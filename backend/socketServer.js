const authSocketMiddleware = require("./middleware/authSocketMiddleware");
const serverStore = require("./serverStore");
const disconnectHandler = require("./socketHandlers/diconnectHandler");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  serverStore.setSocketServer(io);

  io.use((socket, next) => {
    console.log("socket middleware");
    authSocketMiddleware(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("New connection");
    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      console.log("User disconnected");
      disconnectHandler(socket);
    });
  });
};

module.exports = {
  registerSocketServer,
};
