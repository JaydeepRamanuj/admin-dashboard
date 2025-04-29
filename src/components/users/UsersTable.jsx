import { data } from "autoprefixer";
import React, { useState } from "react";
import { userData } from "../../data/usersData";
import { CiSearch } from "react-icons/ci";
import UserListItem from "./UserListItem";

function UsersTable() {
  const originalData = userData;
  const [data, setData] = useState(userData);
  const [value, setValue] = useState("");

  function searchUser(username) {
    if (username == "") {
      setData(originalData);
    } else {
      const sortedData = [...data].filter((user) =>
        user.name.includes(username)
      );
      setData(sortedData);
    }
  }

  function handleSearch(e) {
    console.log(e.target.value);
    setValue(e.target.value);
    searchUser(e.target.value);
  }

  function removeItem(userId) {
    const filteredData = [...data].filter((user) => user.id !== userId);
    setData(filteredData);
  }
  return (
    <div className="w-full p-6 border  border-slate-500/30 rounded-md shadow-all backdrop-blur-md">
      <div className="text-lg font-semibold flex items-center justify-between ">
        <span>Users</span>
        <span className="bg-white/10 rounded-md flex gap-2 items-center px-2 focus-within:outline outline-1">
          <CiSearch />
          <input
            type="text"
            name=""
            id=""
            value={value}
            placeholder="Search user"
            className="bg-transparent py-1 outline-none"
            onInput={handleSearch}
          />
        </span>
      </div>
      <div className="mt-4 p-1">
        <ul className="flex p-1.5">
          <li className="basis-[150px] flex-1">Name</li>
          <li className="flex-1">Email</li>
          <li className="flex-1">Role</li>
          <li className="flex-1">Status</li>
          <li className="flex-1">Actions</li>
        </ul>
        <div>
          {data &&
            data.map((user, index) => (
              <UserListItem
                key={index}
                userId={user.id}
                name={user.name}
                email={user.email}
                role={user.role}
                status={user.status}
                userImg={user.img}
                onDelete={removeItem}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
