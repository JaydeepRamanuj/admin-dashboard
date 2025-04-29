import React, { useContext } from "react";
import SidebarListItem from "./SidebarListItem";
import { FaBars, FaChartBar } from "react-icons/fa";
import { sideBarMenuItems } from "../utils/constants.jsx";
import ToolContext from "../context/ToolContext.jsx";

function Sidebar() {
  const { toolVal } = useContext(ToolContext);
  return (
    <div
      className={`fixed top-[80px] z-10   py-6 px-4  h-full bg-secondary shadow-r transition-all ${
        toolVal.isSidebarCollapsed ? "w-fit" : "w-[230px]"
      }`}
    >
      <div className="mt-10 flex flex-col gap-2 pl-2">
        {sideBarMenuItems.map((item, index) => (
          <SidebarListItem
            key={index}
            index={index}
            icon={item.icon}
            name={item.name}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
