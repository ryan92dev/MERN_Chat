import React from "react";

const MessengerWelcome = () => {
  return (
    <div className="relative flex items-center justify-center h-full p-4 overflow-y-auto bg-gray-500 rounded-xl">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-50">
          Welcome to Messenger
        </h1>
        <p className="text-lg text-gray-50">Select a chat to start messaging</p>
      </div>
    </div>
  );
};

export default MessengerWelcome;
