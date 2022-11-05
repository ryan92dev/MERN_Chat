import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const FriendInvite = () => {
  return (
    <div className="h-10 my-2 bg-gray-300 rounded-md">
      <div className="flex items-center px-2 py-1 ">
        <div className="w-8 h-8 my-auto bg-gray-700 rounded-full">
          {/* Image */}
        </div>
        <div className="flex justify-between flex-1 ml-2">
          <h3 className="text-sm">John Doe</h3>
          <div className="flex">
            <div className="flex">
              <AiOutlineClose className="w-5 h-5 my-auto mr-2" />
              <AiOutlineCheck className="w-5 h-5 my-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendInvite;
