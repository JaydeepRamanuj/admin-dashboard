import React, { useContext } from "react";
import ToolContext from "../context/ToolContext";
import { FaBars } from "react-icons/fa";

function Header({ name }) {
  const { toolVal, setToolVal } = useContext(ToolContext);
  return (
    <div className="fixed w-full top-0 z-10  flex  pt-7 pl-4 h-[80px] flex-1 text-2xl text-white font-bold  object-center bg-secondary shadow-b">
      <div>
        <div
          className="h-[50px] p-1"
          onClick={() => {
            setToolVal((prev) => ({
              ...prev,
              isSidebarCollapsed: !toolVal.isSidebarCollapsed,
            }));
          }}
        >
          <div className="p-2 w-fit hover:bg-white/10 rounded-full active:scale-95 cursor-pointer">
            <FaBars className=" size-5" />
          </div>
        </div>
      </div>
      <span className="ml-[150px]">{name}</span>
    </div>
  );
}

export default Header;
