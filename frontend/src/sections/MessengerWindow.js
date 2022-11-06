import React from "react";
import MessengerHeader from "../components/MessengerHeader";
import MessengerInput from "../components/MessengerInput";
import Chat from "./Chat";

const MessengerWindow = () => {
  return (
    <div className="relative flex flex-col h-full p-4 overflow-y-auto bg-gray-500 rounded-xl">
      <div className="flex-none ">
        <MessengerHeader />
      </div>

      <div className="flex-1 my-4 min-h-[160px] overflow-y-auto bg-gray-100 p-4 rounded-lg">
        <Chat />
      </div>

      <div className="flex flex-none w-full">
        <MessengerInput />
      </div>
    </div>
  );
};

export default MessengerWindow;
