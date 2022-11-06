const FriendInvitation = require("../../models/FriendInvitation");
const User = require("../../models/User");
const friendsUpdates = require("../../socketHandlers/friends/updateFriendsPendingList");
const sendError = require("../../utils/sendError");
const {
  updateFriendsList,
} = require("../../socketHandlers/friends/updateFriendsList");

const acceptInviteController = async (req, res, next) => {
  try {
    const { id } = req.body;

    console.log("acceptInviteController", id);

    const invitation = await FriendInvitation.findById(id);

    if (!invitation) {
      return sendError(res, "Invitation not found", 404);
    }

    const { sender, receiver } = invitation;

    console.log("Sender Receiver", sender, receiver);

    // add friends to both users
    const senderUser = await User.findById(sender);
    senderUser.friends = [...senderUser.friends, receiver];

    const receiverUser = await User.findById(receiver);
    receiverUser.friends = [...receiverUser.friends, sender];

    await senderUser.save();
    await receiverUser.save();

    // delete invitation
    await FriendInvitation.findByIdAndDelete(id);

    // update list of the friends if the users are online
    updateFriendsList(sender.toString());
    updateFriendsList(receiver.toString());

    // update list of friends pending invitations
    friendsUpdates.updateFriendsPendingInvitations(receiver.toString());

    return res.status(200).send("Friend successfuly added");
  } catch (err) {
    console.log(err);
    return sendError(res, "Something went wrong", 500);
  }
};

module.exports = acceptInviteController;
