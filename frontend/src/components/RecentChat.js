import React from "react";

const RecentChat = () => {
  return (
    <div className="h-12 my-2 bg-gray-300 rounded-md">
      <div className="flex h-full px-2 py-1 ">
        <div className="w-8 h-8 my-auto bg-gray-700 rounded-full">
          {/* Image */}
        </div>
        <div className="flex-1 h-full ml-2">
          <h3 className="text-sm">John Doe</h3>
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
