import React from "react";
import { FiPhone, FiVideo, FiMoreVertical } from "react-icons/fi";

const MessengerHeader2 = () => {
  return (
    <div className="px-6 py-3 bg-gray-600 rounded-xl">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full mb-6 sm:w-auto sm:mb-0">
          <img
            className="w-12 h-12 mr-4 rounded-full"
            src="trizzle-assets/images/avatar-women-messages.png"
            alt=""
          />
          <div>
            <h5 className="font-bold text-gray-50">Sahra Jackson</h5>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 border border-gray-500 rounded-full p-auto">
            <FiPhone className="w-5 h-5 m-2" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 border border-gray-500 rounded-full p-auto">
            <FiVideo className="w-5 h-5 m-2" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 border border-gray-500 rounded-full p-auto">
            <FiMoreVertical className="w-5 h-5 m-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessengerHeader2;
