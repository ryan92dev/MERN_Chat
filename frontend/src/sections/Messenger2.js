import React from "react";
import MessengerHeader2 from "../components/MessengerHeader2";
import MessengerInput from "../components/MessengerInput";
import Chat from "./Chat";

const Messenger2 = () => {
  return (
    <div className="w-full h-screen p-4 pb-16 overflow-hidden lg:p-4 ">
      <div className="relative flex flex-col h-full p-4 overflow-y-auto bg-gray-500 rounded-xl">
        <div className="flex-none ">
          <MessengerHeader2 />
        </div>

        <div className="flex-1 my-4 min-h-[160px] overflow-y-auto bg-gray-100 p-4 rounded-lg">
          <Chat />
        </div>

        <div className="flex flex-none w-full">
          <MessengerInput />
        </div>
      </div>
    </div>
  );
};

export default Messenger2;
