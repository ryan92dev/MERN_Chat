import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import {
  MdOutlineAttachFile,
  MdOutlineMic,
  MdOutlineMoreVert,
  MdOutlinePhotoCamera,
} from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import MessengerHeader from "../components/MessengerHeader";

const Messenger = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full">
        <MessengerHeader />
        <div className="flex flex-col flex-1 p-2 bg-red-300">
          <div className="flex-1 bg-red-700 "></div>
        </div>
        <div className="flex-none h-16">
          <div className="flex items-center m-2">
            <div className="flex-1">
              <input
                type="text"
                title="Search"
                placeholder="Search Messages or Friends"
                className="w-full px-2 my-3 text-sm bg-transparent focus:bg-transparent focus:border-none focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex">
              <div>
                <BsEmojiSmile className="w-6 h-6 ml-3 mr-2" />
              </div>
              <div>
                <MdOutlineAttachFile className="w-6 h-6 ml-3 mr-2" />
              </div>
              <div>
                <BiImageAdd className="w-6 h-6 ml-3 mr-2" />
              </div>
              <div>
                <IoMdSend className="w-6 h-6 ml-3 mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
