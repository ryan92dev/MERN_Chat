const sendInviteController = require("./sendInviteCtrl");
const rejectInviteController = require("./rejectInviteCtrl");
const acceptInviteController = require("./acceptInviteCtrl");

module.exports = {
  sendInvite: sendInviteController,
  rejectInvite: rejectInviteController,
  acceptInvite: acceptInviteController,
};
