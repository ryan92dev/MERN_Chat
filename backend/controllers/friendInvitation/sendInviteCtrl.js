const asyncHandler = require("express-async-handler");
const sendError = require("../utils/sendError");
const FriendInvitation = reqiuire("../../models/friendInvitation.js");

const sendInviteCtrl = asyncHandler(async (req, res) => {
  const { targetEmail } = req.body;

  const user = req.user;

  // Check if user && target user exists
  if (!user) return sendError(res, "Not authorized", 401);
  const targetUser = await User.findOne({ email: targetEmail.toLowerCase() });

  if (!targetUser) return sendError(res, "User not found", 404);

  if (targetUser._id.toString() === user._id.toString())
    return sendError(res, "You can't send invitation to yourself", 400);

  // Check if user already sent invitation to target user
  const isFriend = user.friends.find(
    (friend) => friend.toString() === targetUser._id.toString()
  );

  if (isFriend) return sendError(res, "You are already friends", 400);

  // Check if user already sent invitation to target user
  const isFriendRequestSent = user.friendRequestsSent.find(
    (friendRequest) => friendRequest.toString() === targetUser._id.toString()
  );

  if (isFriendRequestSent)
    return sendError(
      res,
      "You have already sent friend request to this user",
      400
    );

  // Check if user already received invitation from target user
  const isFriendRequestReceived = targetUser.friendRequestsReceived.find(
    (friendRequest) => friendRequest.toString() === user._id.toString()
  );

  if (isFriendRequestReceived)
    return sendError(
      res,
      "This user has already sent friend request to you",
      400
    );

  // Create friend invitation
  const newInvitation = new FriendInvitation({
    sender: user._id,
    receiver: targetUser._id,
  });

  await newInvitation.save();

  user.friendRequestsSent.push(targetUser._id);
  targetUser.friendRequestsReceived.push(user._id);

  await user.save();
  await targetUser.save();

  res.status(200).json({
    success: true,
    message: "Invitation sent",
  });
});

module.exports = sendInviteCtrl;
