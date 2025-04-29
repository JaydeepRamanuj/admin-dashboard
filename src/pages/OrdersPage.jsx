import React, { useContext, useEffect } from "react";
import ToolContext from "../context/ToolContext";
import { OrderPageHighlightNumberItems } from "../utils/constants";
import HighlightNumbersCard from "../components/common/HighlightNumberCard";
import PieChartCommon from "../components/common/PieChartCommon";
import LineChartCommon from "../components/common/LineChartCommon";
import { dailyOrdersData, orderStatusData } from "../data/ordersData";
import OrderTable from "../components/order/OrderTable";

function OrdersPage() {
  const { setToolVal } = useContext(ToolContext);
  useEffect(() => {
    setToolVal((prev) => ({ ...prev, activeTab: 4 }));
  }, []);
  return (
    <div>
      <div className="flex justify-between mt-6">
        {OrderPageHighlightNumberItems.map((item, index) => (
          <HighlightNumbersCard
            key={index}
            icon={item.icon}
            name={item.name}
            number={item.value}
          />
        ))}
      </div>
      <div className="flex my-6 justify-between ">
        <LineChartCommon
          chartTitle="Daily Orders"
          data={dailyOrdersData}
          dataKey="orders"
          xKey="date"
          yKey="orders"
        />
        <PieChartCommon
          chartTitle="Order Status Distribution"
          data={orderStatusData}
          dataKey="value"
        />
      </div>
      <div className="my-6">
        <OrderTable />
      </div>
    </div>
  );
}

export default OrdersPage;
