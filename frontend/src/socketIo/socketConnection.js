import io from "socket.io-client";
import {
  setPendingFriendInvites,
  setFriends,
  setOnlineUsers,
} from "../features/FriendInvites/friendInvitesSlice";
import { store } from "../app/store";

let socket = null;

export const connectSocketServer = ({ user, token }) => {
  console.log(token);
  socket = io("http://localhost:8000", {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.log("Connected to socket server");
    console.log(socket.id);
  });

  socket.on("friend-invitations", ({ pendingInvitations }) => {
    store.dispatch(setPendingFriendInvites(pendingInvitations));
  });

  socket.on("friends-list", ({ friends }) => {
    store.dispatch(setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });
};
