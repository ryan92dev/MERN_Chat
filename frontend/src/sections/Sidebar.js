import React, { useState } from "react";
import FriendInviteModal from "../components/FriendInviteModal";
import SidebarChat from "./Sidebar/SidebarChat";
import SidebarFriends from "./Sidebar/SidebarFriends";
import SidebarProfile from "./Sidebar/SidebarProfile";

const Sidebar = ({ friendInviteModal, setFriendInviteModal, tab }) => {
  const showModal = () => {
    setFriendInviteModal(true);
  };

  const tabs = [
    {
      id: "chat",
      name: "chat",
      component: <SidebarChat key="chat" />,
    },
    {
      id: "profile",
      name: "profile",
      component: <SidebarProfile key="profile" />,
    },
    {
      id: "friends",
      name: "friends",
      component: <SidebarFriends key="friends" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col h-screen pb-16 overflow-hidden lg:pb-0">
        <div className="flex flex-col h-full mx-2 mb-2 overflow-y-auto">
          <div className="flex items-center justify-end flex-none h-16 ">
            <button onClick={showModal} className="rounded-lg bg-slate-700">
              <p className="px-4 py-2">Friend Invite</p>
            </button>
          </div>

          {/* Open Tab  */}

          {tabs.map((tabItem) => {
            if (tabItem.name === tab) {
              return tabItem.component;
            }
          })}
        </div>
      </div>

      <FriendInviteModal
        friendInviteModal={friendInviteModal}
        setFriendInviteModal={setFriendInviteModal}
      />
    </>
  );
};

export default Sidebar;
