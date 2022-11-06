const serverStore = require("../../serverStore");
const User = require("../../models/User");

const updateFriendsList = async (userId) => {
  try {
    // find active connections of specific id (online users)
    const receiverList = serverStore.getActiveConnections(userId);

    if (receiverList.length > 0) {
      const user = await User.findById(userId).populate("friends");

      if (user) {
        const friendsList = user.friends.map((friend) => {
          return {
            id: friend._id.toString(),
            firstName: friend.firstName,
            lastName: friend.lastName,
            email: friend.email,
            profilePicture: friend.profilePicture,
          };
        });

        // get io server instance
        const io = serverStore.getSocketServer();

        receiverList.forEach((receiverSocketId) => {
          io.to(receiverSocketId).emit("friends-list", {
            friends: friendsList ? friendsList : [],
          });
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateFriendsList };
