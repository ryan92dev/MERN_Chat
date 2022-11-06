import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingFriendInvites: [],
  onlineUsers: [],
};

const friendInvitesSlice = createSlice({
  name: "friendInvites",
  initialState,
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload;
    },

    setPendingFriendInvites: (state, action) => {
      state.pendingFriendInvites = action.payload;
    },

    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const { setFriends, setPendingFriendInvites, setOnlineUsers } =
  friendInvitesSlice.actions;
export default friendInvitesSlice.reducer;

export const selectFriends = (state) => state.friendInvites.friends;
export const selectPendingFriendInvites = (state) =>
  state.friendInvites.pendingFriendInvites;
export const selectOnlineUsers = (state) => state.friendInvites.onlineUsers;
