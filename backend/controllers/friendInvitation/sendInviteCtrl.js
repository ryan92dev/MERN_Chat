const User = require("../../models/User");
const FriendInvitation = require("../../models/FriendInvitation");
const friendsUpdates = require("../../socketHandlers/friends/updateFriendsPendingList");

const sendError = require("../../utils/sendError");

const sendInviteController = async (req, res, next) => {
  const { email: targetMailAddress } = req.body;

  const { id: userId, email } = req.user;

  // check if friend that we would like to invite is not user

  if (email.toLowerCase() === targetMailAddress.toLowerCase())
    return sendError(res, "You can't invite yourself", 400);

  const targetUser = await User.findOne({
    email: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    return sendError(res, "User not found", 404);
  }

  // check if invitation has been already sent
  const invitationAlreadyReceived = await FriendInvitation.findOne({
    sender: userId,
    receiver: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    return sendError(res, "Invitation has been already sent", 404);
  }

  // check if the user whuch we would like to invite is already our friend
  const usersAlreadyFriends = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (usersAlreadyFriends) {
    return sendError(res, "You are already friends", 400);
  }

  // create new invitation in database
  const newInvitation = await FriendInvitation.create({
    sender: userId,
    receiver: targetUser._id,
  });

  // if invtiation has been successfully created we would like to update friends invitations if other user is online

  // send pending invitations update to specific user
  friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());

  return res.status(200);
};

module.exports = sendInviteController;
