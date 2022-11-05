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
  console.log("connectedUsers", connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
  }
  console.log("connectedUsers Removed", connectedUsers);
};

// This will give us all the instances of the user that are connected i.e. multiple tabs or multiple devices
const getActiveUserConnections = () => {
  const activeUserConnections = [];

  connectedUsers.forEach((value, key) => {
    if (value.userId === userId) {
      activeUserConnections.push(key);
    }
  });

  return activeUserConnections;
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
  getActiveUserConnections,
  getOnlineUsers,
};
