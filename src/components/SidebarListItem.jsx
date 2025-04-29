import React, { useContext } from "react";
import ToolContext from "../context/ToolContext";
import { useNavigate } from "react-router-dom";
function SidebarListItem({ icon, name, index, path }) {
  const { toolVal, setToolVal } = useContext(ToolContext);
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center gap-2 px-1.5  py-1 cursor-pointer rounded-md hover:bg-white/15 transition-all ${
        toolVal.activeTab == index && "bg-white/30"
      } `}
      onClick={() => {
        setToolVal((prev) => ({ ...prev, activeTab: index }));
        navigate(path);
      }}
    >
      <span className={`${toolVal.isSidebarCollapsed && "p-1.5 text-lg"}`}>
        {icon}
      </span>
      {toolVal.isSidebarCollapsed || (
        <span className="font-semibold">{name}</span>
      )}
    </div>
  );
}

export default SidebarListItem;
