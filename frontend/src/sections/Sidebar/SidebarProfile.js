import React from "react";
import {
  HiOutlineChat,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from "react-icons/hi";
import { selectCurrentUser } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";

const SidebarProfile = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <div className="flex-1 pb-16 mb-2 bg-gray-200 lg:pb-0">
      <div className="flex items-center justify-center mx-4 mt-4">
        <div className="flex items-center justify-center flex-none w-20 h-20 rounded-full border-white border-[4px] overflow-hidden">
          <img
            src={user?.profilePicture}
            className="object-cover w-20 h-20 rounded-full"
            alt="profile"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-4 mt-4">
        <h3 className="text-lg font-bold capitalize text-slate-600">
          {user?.firstName} {user?.lastName}
        </h3>
        <p className="mt-1 text-xs tracking-wider text-slate-400">
          {user?.jobTitle}
        </p>
      </div>
      <div className="h-[1px] bg-slate-800 my-4 mx-4" />
      <div className="flex items-center mx-4">
        <p className="text-sm text-slate-500">{user?.status}</p>
      </div>
      <div className="h-[1px] bg-slate-800 my-4 mx-4" />

      <div className="flex flex-col gap-3 mx-4">
        <div className="flex items-center gap-2">
          <HiOutlineUser className="inline-block w-5 h-5 text-slate-500" />
          <p className="text-sm text-gray-500 capitalize">
            {user?.firstName} {user?.lastName}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineChat className="inline-block w-5 h-5 text-slate-500" />
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker className="inline-block w-5 h-5 text-slate-500" />
          <p className="text-sm text-gray-500">{user?.location}</p>
        </div>
      </div>

      <div className="h-[1px] bg-slate-800 my-4 mx-4" />

      <div className="grid grid-cols-3 gap-2 mx-4 ">
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
        <div className="bg-gray-500">
          <div className="aspect-square"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
