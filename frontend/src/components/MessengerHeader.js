import React from "react";

const MessengerHeader = () => {
  return (
    <div className="flex items-center h-16 bg-gray-800">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center ml-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full "></div>
          <p className="ml-2">Friend Name</p>
        </div>

        <div className="flex items-center mr-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 ml-2 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 ml-2 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 ml-2 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 ml-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MessengerHeader;
