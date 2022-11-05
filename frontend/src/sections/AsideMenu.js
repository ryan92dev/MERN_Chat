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

const AsideMenu = ({ setTab }) => {
  return (
    <div className="h-screen overflow-hidden ">
      <div className="flex flex-col h-screen overflow-y-auto">
        <div className="flex items-center justify-center flex-none h-16">
          <BiChat className="w-8 h-8" />
        </div>
        <div className="flex flex-col items-center justify-between flex-1 gap-3 py-6">
          <MdPerson onClick={() => setTab("profile")} className="w-8 h-8" />
          <MdChat onClick={() => setTab("chat")} className="w-8 h-8" />
          <MdContactPage
            onClick={() => setTab("friends")}
            className="w-8 h-8"
          />
          <MdGroup className="w-8 h-8" />
          <MdPhone className="w-8 h-8" />
          <MdVideoCall className="w-8 h-8" />
          <MdLightbulb className="w-8 h-8" />
          <MdSettings className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
