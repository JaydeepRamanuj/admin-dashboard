import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
function UserListItem({ userId, name, email, role, status, onDelete }) {
  return (
    <div className="flex my-1.5 p-1.5 border-t border-t-gray-500/30 hover:bg-white/5 text-gray-400 font-semibold rounded-md">
      <div className="basis-[150px] flex-1 flex gap-2 items-center">
        <img className="size-8 rounded-full" src="male-profile.jpeg" alt="" />
        <span>{name}</span>
      </div>
      <div className="flex-1 items-center">{email}</div>
      <div className="flex-1 items-center ">
        <span className=" bg-blue-600 text-white text-center rounded-full px-2 py-0.5 text-sm">
          {role}
        </span>
      </div>
      <div className={`flex-1 items-center`}>
        <span
          className={`text-white text-center rounded-full px-2 py-0.5 text-sm ${
            status == "Active" ? "bg-green-700" : "bg-red-700"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="flex-1  flex items-center gap-2">
        <TbEdit className="cursor-pointer text-xl hover:text-blue-400" />
        <MdDeleteOutline
          className="cursor-pointer text-xl hover:text-red-400"
          onClick={() => {
            onDelete(userId);
          }}
        />
      </div>
    </div>
  );
}

export default UserListItem;
