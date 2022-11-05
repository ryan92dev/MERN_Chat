import React from "react";
import {
  MdOutlineAttachFile,
  MdOutlineMic,
  MdOutlineMoreVert,
  MdOutlinePhotoCamera,
} from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";

const MessengerInput = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-1">
        <textarea
          className="w-full p-4 text-sm font-medium text-gray-200 placeholder-gray-300 bg-gray-600 resize-none h-14 rounded-xl "
          id="messagesInput1-2"
          name=""
          placeholder="Type a message..."
        />
      </div>
      <div className="flex items-center ml-3">
        <div className="flex w-full gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 border border-gray-500 rounded-full p-auto">
            <MdOutlinePhotoCamera className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 border border-gray-500 rounded-full p-auto">
            <MdOutlineAttachFile className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-700 border border-gray-500 rounded-full p-auto">
            <BsEmojiSmile className="w-6 h-6" />
          </div>
        </div>
        <div className="flex items-center ml-3">
          <button className="rounded-lg bg-slate-700">
            <IoMdSend className="w-6 h-6 m-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessengerInput;
