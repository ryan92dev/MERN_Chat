import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentChat } from "../features/Chat/chatSlice";
import MessengerWelcome from "./MessengerWelcome";

import MessengerWindow from "./MessengerWindow";

const Messenger = () => {
  const currentChat = useSelector(selectCurrentChat);

  return (
    <div className="w-full h-screen p-4 pb-16 overflow-hidden lg:p-4 ">
      {!currentChat ? (
        <MessengerWelcome />
      ) : (
        <MessengerWindow currentChat={currentChat} />
      )}
    </div>
  );
};

export default Messenger;
