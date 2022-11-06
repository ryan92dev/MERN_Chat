const serverStore = require("../serverStore.js");
const friendsUpate = require("../socketHandlers/friends/updateFriendsPendingList");
const {
  updateFriendsList,
} = require("../socketHandlers/friends/updateFriendsList");

const newConnectionHandler = async (socket, io) => {
  const user = socket.user;

  // Add user to the list of connected users
  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: user.id,
  });

  // Update friends pending invitations
  friendsUpate.updateFriendsPendingInvitations(user.id);

  // Update friends list
  updateFriendsList(user.id);
};

module.exports = newConnectionHandler;
