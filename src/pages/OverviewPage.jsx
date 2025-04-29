import React, { useContext, useEffect } from "react";
import { OverviewPageHighlightNumberItems } from "../utils/constants";
import HighlightNumbersCard from "../components/common/HighlightNumberCard";
import PieChartCommon from "../components/common/PieChartCommon";
import BarChartCommon from "../components/common/BarChartCommon";
import {
  categoryData,
  salesChannelData,
  salesData,
} from "../data/overviewData";
import LineChartCommon from "../components/common/LineChartCommon";
import ToolContext from "../context/ToolContext";

function OverviewPage() {
  const { setToolVal } = useContext(ToolContext);
  useEffect(() => {
    setToolVal((prev) => ({ ...prev, activeTab: 0 }));
  }, []);
  return (
    <div className="mx-auto flex-col overflow-auto">
      <div className="flex justify-between mt-6 ">
        {OverviewPageHighlightNumberItems.map((item, index) => (
          <HighlightNumbersCard
            key={index}
            icon={item.icon}
            name={item.name}
            number={item.value}
          />
        ))}
      </div>
      <div className="flex mt-6 justify-between ">
        <LineChartCommon
          chartTitle="Sales Overview"
          data={salesData}
          dataKey="sales"
          xKey="name"
          yKey="sales"
        />
        <PieChartCommon
          chartTitle="Category Distribution"
          data={categoryData}
          dataKey="value"
        />
      </div>
      <div className="my-6">
        <BarChartCommon
          chartTitle="Sales by Channel"
          data={salesChannelData}
          dataKey="value"
          xKey="name"
          yKey="value"
          width={800}
        />
      </div>
    </div>
  );
}

export default OverviewPage;
