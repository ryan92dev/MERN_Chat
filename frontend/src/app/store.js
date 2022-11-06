import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/Theme/themeSlice";
import authReducer from "../features/Auth/authSlice";
import chatReducer from "../features/Chat/chatSlice";
import friendInvitesReducer from "../features/FriendInvites/friendInvitesSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    theme: themeReducer,
    auth: authReducer,
    friendInvites: friendInvitesReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
