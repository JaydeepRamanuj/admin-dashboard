import { useContext, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ToolContext from "./context/ToolContext";
import { sideBarMenuItems } from "./utils/constants";
import OverviewPage from "./pages/OverviewPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import { useBreakpoint } from "./hooks/useBreakpoint";

function App() {
  const { toolVal } = useContext(ToolContext);
  const breakpoint = useBreakpoint();
  useEffect(() => {}, [breakpoint]);
  return (
    <>
      <Router>
        {breakpoint > 1200 ? (
          <div className="bg-[#151f2d] w-full text-white flex">
            <Sidebar />
            <Header name={sideBarMenuItems[toolVal.activeTab].name} />
            <div className="mt-[80px] ml-[250px] w-[75%] mx-auto ">
              <div className="min-h-screen">
                <Routes>
                  <Route path="/" element={<OverviewPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/users" element={<UsersPage />} />
                  <Route path="/sales" element={<SalesPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                </Routes>
                {/* <OverviewPage /> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen bg-[#151f2d] flex justify-center items-center">
            <h1 className="bg-slate-500/20 p-2 rounded w-[80%] mx-auto text-white text-center text-xl">
              ⚠️ Heads up! <br />
              This dashboard is designed for desktop screens. For the best
              experience, please switch to a device with a screen width greater
              than 1200px.
            </h1>
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
