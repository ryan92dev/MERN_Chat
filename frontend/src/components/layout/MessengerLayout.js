import React, { useEffect, useState } from "react";
import AsideMenu from "../../sections/AsideMenu";
import BottomBar from "../../sections/BottomBar";
import Messenger2 from "../../sections/Messenger2";
import Sidebar from "../../sections/Sidebar";
import { selectCurrentUser } from "../../features/Auth/authSlice";
import { selectCurrentToken } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";
import { connectSocketServer } from "../../socketIo/socketConnection";

const MessengerLayout = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const [tab, setTab] = useState("chat");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user && token) {
      console.log("user and token are available");
      connectSocketServer({ user, token });
    }

    return () => {
      console.log("cleanup");
    };
  }, [user, token]);

  return (
    <div className="w-full h-screen bg-gray-800">
      <div className="flex">
        <div className="relative hidden w-16 bg-slate-700 lg:block">
          <AsideMenu setTab={setTab} />
        </div>

        <div className="fixed inset-0 z-10 px-6 md:px-0 md:block md:w-72 bg-slate-600 md:static">
          <Sidebar
            friendInviteModal={showModal}
            setFriendInviteModal={setShowModal}
            tab={tab}
          />
        </div>

        <div className="flex-1 bg-slate-800">
          <Messenger2 />
        </div>

        <div className="fixed top-0 right-0 z-10 hidden lg:static">
          <div className="w-64 h-[100vh] bg-slate-600">Friend Profile</div>
        </div>
      </div>

      <BottomBar setTab={setTab} />
    </div>
  );
};

export default MessengerLayout;
