import { useState } from "react";
import ToolContext from "../context/ToolContext";

function ToolProvider({ children }) {
  const [toolVal, setToolVal] = useState({
    isSidebarCollapsed: false,
    activeTab: 0,
  });

  return (
    <ToolContext.Provider value={{ toolVal, setToolVal }}>
      {children}
    </ToolContext.Provider>
  );
}

export default ToolProvider;
