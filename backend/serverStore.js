const connectedUsers = new Map();

let io = null;

const setSocketServer = (ioInstance) => {
  io = ioInstance;
};

const getSocketServer = () => {
  return io;
};

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("Connected :", connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
  }
};

// This will give us all the instances of the user that are connected i.e. multiple tabs or multiple devices
const getActiveConnections = (userId) => {
  const activeConnections = [];

  connectedUsers.forEach(function (value, key) {
    if (value.userId === userId) {
      activeConnections.push(key);
    }
  });

  return activeConnections;
};

const getOnlineUsers = () => {
  const onlineUsers = [];

  connectedUsers.forEach((value, key) => {
    if (!onlineUsers.includes(value.userId)) {
      onlineUsers.push({ socketId: key, userId: value.userId });
    }
  });

  return onlineUsers;
};

module.exports = {
  setSocketServer,
  getSocketServer,
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  getOnlineUsers,
};
