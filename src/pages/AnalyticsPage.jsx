import React, { useContext, useEffect } from "react";
import ToolContext from "../context/ToolContext";
import { AnalyticsPageHighlightNumberItems } from "../utils/constants";
import HighlightNumbersCard from "../components/common/HighlightNumberCard";
import PieChartCommon from "../components/common/PieChartCommon";
import LineChartCommon from "../components/common/LineChartCommon";
import {
  channelData,
  customerSegmentationData,
  productPerformanceData,
  revenueData,
  userRetentionData,
} from "../data/analyticsData";
import MultiBarChart from "../components/analytics/MultiBarChart";
import RadarChartCommon from "../components/common/RadarChartCommon";
import MultiAreaChart from "../components/analytics/MultiAreaChart";
import AnalyticsHighlightsNumberCard from "../components/analytics/AnalyticsHighlightsNumberCard";

function AnalyticsPage() {
  const { setToolVal } = useContext(ToolContext);
  useEffect(() => {
    setToolVal((prev) => ({ ...prev, activeTab: 5 }));
  }, []);
  return (
    <div>
      <div className="flex justify-between mt-6">
        {AnalyticsPageHighlightNumberItems.map((item, index) => (
          <AnalyticsHighlightsNumberCard
            key={index}
            name={item.name}
            icon={item.icon}
            isGrowing={item.isGrowing}
            number={item.value}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="mt-6">
        <MultiAreaChart data={revenueData} xKey="month" />
      </div>
      <div className="flex my-6 justify-between ">
        <MultiBarChart
          data={productPerformanceData}
          chartTitle="Product Performance"
          width={500}
          height={300}
          fullLength={false}
        />
        <PieChartCommon
          chartTitle="Channel Performance"
          data={channelData}
          dataKey="value"
        />
      </div>
      <div className="flex my-6 justify-between ">
        <LineChartCommon
          chartTitle="User Retention"
          data={userRetentionData}
          dataKey="retention"
          xKey="name"
          yKey="retention"
        />
        <RadarChartCommon
          data={customerSegmentationData}
          chartTitle="Customer Segmentation"
          fullLength={false}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}

export default AnalyticsPage;
