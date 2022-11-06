import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useSelector } from "react-redux";
import FriendInvite from "../../components/FriendInvite";
import RecentChat from "../../components/RecentChat";
import {
  selectFriends,
  selectOnlineUsers,
  selectPendingFriendInvites,
} from "../../features/FriendInvites/friendInvitesSlice";

const SidebarChat = () => {
  const onlineUsers = useSelector(selectOnlineUsers);

  const pendingFriendInvites = useSelector(selectPendingFriendInvites);
  const friends = useSelector(selectFriends);

  const isOnline = (friend) => {
    const onlineUser = onlineUsers.find((user) => user.userId === friend.id);
    return onlineUser ? true : false;
  };

  return (
    <>
      <div className="flex-none w-full mt-2 border rounded-lg">
        <div className="flex items-center ">
          <MdOutlineSearch className="w-6 h-6 ml-3 mr-2" />
          <input
            type="text"
            title="Search"
            placeholder="Search Messages or Friends"
            className="w-full px-2 my-3 text-sm bg-transparent focus:bg-transparent focus:border-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <h2 className="mt-3">Recent Chats</h2>
      <div className="flex-[1.5] h-[160px] my-2 overflow-y-auto">
        {friends.map((friend) => (
          <RecentChat
            key={friend.id}
            friend={friend}
            isOnline={isOnline(friend)}
          />
        ))}
      </div>

      <h2 className="mt-3">Friend Invitations</h2>
      <div className="flex-1 h-40 my-2 overflow-y-auto">
        <div className="h-[95%]">
          {pendingFriendInvites.map((friendInvite) => (
            <FriendInvite key={friendInvite._id} friendInvite={friendInvite} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarChat;
