import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  choosenChat: null,
  chatType: null,
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChoosenChat: (state, action) => {
      state.choosenChat = action.payload;
      state.chatType = action.payload.chattype;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export default chatSlice.reducer;

export const { setChoosenChat, setMessages } = chatSlice.actions;
export const selectCurrentChat = (state) => state.chat.choosenChat;
export const selectChatType = (state) => state.chat.chatType;
export const selectMessages = (state) => state.chat.messages;
