import React from "react";

const FriendInviteModal = ({ friendInviteModal, setFriendInviteModal }) => {
  const closeModal = () => {
    setFriendInviteModal(false);
  };

  return (
    friendInviteModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900/50">
        <div className="">
          <div className="flex flex-col p-6 bg-gray-800 rounded-lg h-52 w-96">
            <div className="flex items-center justify-between mb-6 ">
              <h1 className="font-semibold ">Friend Invitation</h1>
              <button onClick={closeModal} className="rounded-lg bg-slate-700">
                <p className="px-3 py-1">X</p>
              </button>
            </div>
            <div className="flex ">
              <input
                className="w-full p-3 text-sm font-medium text-gray-200 placeholder-gray-300 bg-gray-600 resize-none rounded-xl "
                id="messagesInput1-2"
                name=""
                placeholder="Enter email address..."
              />
            </div>
            <button className="flex items-center justify-center w-1/2 mt-4 text-white bg-blue-500 rounded-lg">
              <p className="px-4 py-2">Send Invite</p>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FriendInviteModal;
