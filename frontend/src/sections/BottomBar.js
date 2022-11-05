import React from "react";
import { BiChat } from "react-icons/bi";
import {
  MdSettings,
  MdPerson,
  MdChat,
  MdGroup,
  MdContactPage,
  MdPhone,
  MdVideoCall,
  MdLightbulb,
  MdLightbulbOutline,
} from "react-icons/md";

const BottomBar = ({ setTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full h-16 overflow-hidden bg-gray-800 lg:hidden">
      <div className="flex items-center justify-between flex-1 h-full gap-3 px-6">
        <MdPerson onClick={() => setTab("profile")} className="w-8 h-8" />
        <MdChat onClick={() => setTab("chat")} className="w-8 h-8" />
        <MdContactPage className="w-8 h-8" />
        <MdLightbulb className="w-8 h-8" />
        <MdSettings className="w-8 h-8" />
      </div>
    </div>
  );
};

export default BottomBar;
