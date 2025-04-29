import React, { useContext, useEffect } from "react";
import AreaChartCommon from "../components/common/AreaChartCommon";
import {
  dailySalesData,
  monthlySalesData,
  salesByCategory,
} from "../data/salesData";
import LineChartCommon from "../components/common/LineChartCommon";
import PieChartCommon from "../components/common/PieChartCommon";
import {
  ProductPageHighlightNumberItems,
  SalesPageHighlightNumberItems,
} from "../utils/constants";
import HighlightNumbersCard from "../components/common/HighlightNumberCard";
import ToolContext from "../context/ToolContext";
import BarChartCommon from "../components/common/BarChartCommon";

function SalesPage() {
  const { setToolVal } = useContext(ToolContext);
  useEffect(() => {
    setToolVal((prev) => ({ ...prev, activeTab: 3 }));
  }, []);
  return (
    <div>
      <div className="flex justify-between mt-6">
        {SalesPageHighlightNumberItems.map((item, index) => (
          <HighlightNumbersCard
            key={index}
            icon={item.icon}
            name={item.name}
            number={item.value}
          />
        ))}
      </div>
      <div className="mt-6">
        <AreaChartCommon
          data={monthlySalesData}
          chartTitle="Sales Overview"
          dataKey="sales"
          xKey="month"
          yKey="sales"
        />
      </div>

      <div className="flex my-6 justify-between">
        <PieChartCommon
          chartTitle="Sales by Category"
          data={salesByCategory}
          dataKey="value"
        />
        <BarChartCommon
          chartTitle="Sales by Channel"
          data={dailySalesData}
          dataKey="sales"
          xKey="name"
          yKey="sales"
          width={550}
          height={300}
          fullLength={false}
        />
      </div>
    </div>
  );
}

export default SalesPage;
