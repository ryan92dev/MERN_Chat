import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import {
  useRejectFriendInvitationMutation,
  useAcceptFriendInvitationMutation,
} from "../features/FriendInvites/friendInvitesApiSlice";

const FriendInvite = ({ friendInvite }) => {
  const sender = friendInvite?.sender;

  const [rejectFriendInvitation] = useRejectFriendInvitationMutation();
  const [acceptFriendInvitation] = useAcceptFriendInvitationMutation();

  const handleRejectFriendInvitation = () => {
    rejectFriendInvitation({ id: friendInvite._id });
  };

  const handleAcceptFriendInvitation = () => {
    acceptFriendInvitation({ id: friendInvite._id });
  };

  return (
    <div className="h-10 my-2 bg-gray-300 rounded-md">
      <div className="flex items-center px-2 py-1 ">
        <div className="w-8 h-8 my-auto rounded-full">
          <img
            className="w-8 h-8 rounded-full"
            src={sender?.profilePicture}
            alt=""
          />
        </div>
        <div className="flex justify-between flex-1 ml-2">
          <h3 className="text-sm capitalize">
            {sender?.firstName} {sender?.lastName}
          </h3>
          <div className="flex">
            <div className="flex">
              <AiOutlineClose
                onClick={handleRejectFriendInvitation}
                className="w-5 h-5 my-auto mr-2 cursor-pointer"
              />
              <AiOutlineCheck
                onClick={handleAcceptFriendInvitation}
                className="w-5 h-5 my-auto cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendInvite;
