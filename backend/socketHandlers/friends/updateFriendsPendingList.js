const { getActiveConnections, getSocketServer } = require("../../serverStore");
const FriendInvitation = require("../../models/FriendInvitation");

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiver: userId,
    }).populate("sender");

    // find all active connections of specific userId
    const receiverList = getActiveConnections(userId);

    const io = getSocketServer();

    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friend-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateFriendsPendingInvitations,
};
