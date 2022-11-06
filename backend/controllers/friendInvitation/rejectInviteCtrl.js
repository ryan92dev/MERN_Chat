const FriendInvitation = require("../../models/FriendInvitation");
const friendsUpdates = require("../../socketHandlers/friends/updateFriendsPendingList");
const sendError = require("../../utils/sendError");
const {
  updateFriendsList,
} = require("../../socketHandlers/friends/updateFriendsList");

const postReject = async (req, res, next) => {
  try {
    const { id } = req.body;
    const { id: userId } = req.user;

    console.log("id", id);
    console.log("userId", userId);

    // remove that invitation from friend invitations collection
    const invitationExists = await FriendInvitation.exists({ _id: id });

    if (invitationExists) {
      await FriendInvitation.findByIdAndDelete(id);
    }

    // update pending invitations
    friendsUpdates.updateFriendsPendingInvitations(userId);

    // update friends list
    updateFriendsList(userId);

    return res.status(200).send("Invitation succesfully rejected");
  } catch (err) {
    console.log(err);
    return sendError(res, "Something went wrong", 500);
  }
};

module.exports = postReject;
