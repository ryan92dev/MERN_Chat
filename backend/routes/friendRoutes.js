const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const friendInvitationController = require("../controllers/friendInvitation/friendInvitationController");

const router = express.Router();

router.post(
  "/friend-invitation",
  authMiddleware,
  friendInvitationController.sendInvite
);

router.post(
  "/friend-invitation/reject",
  authMiddleware,
  friendInvitationController.rejectInvite
);

router.post(
  "/friend-invitation/accept",
  authMiddleware,
  friendInvitationController.acceptInvite
);

module.exports = router;
