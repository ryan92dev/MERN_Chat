import React from "react";

const RecentChat = ({ friend, isOnline }) => {
  return (
    <div className="h-12 my-2 bg-gray-300 rounded-md">
      <div className="flex h-full px-2 py-1 ">
        <div className="relative my-auto bg-transparent ">
          <div
            className={`p-[2px] border-2 rounded-full
            ${isOnline ? "border-green-500" : "border-gray-500"}`}
          >
            <img
              className="w-8 h-8 rounded-full"
              src={friend.profilePicture}
              alt=""
            />
          </div>
          {/* <div className="absolute top-0 right-0 w-3 h-3 translate-x-1 -translate-y-1 bg-black rounded-full" /> */}
        </div>
        <div className="flex-1 h-full ml-2">
          <h3 className="text-sm">
            {friend?.firstName} {friend?.lastName}
          </h3>
          <p className="text-xs">This was the last message</p>
        </div>
        <div className="flex h-full">
          <p className="text-xs">12:00</p>
        </div>
      </div>
    </div>
  );
};

export default RecentChat;
