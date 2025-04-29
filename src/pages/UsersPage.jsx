import React, { useContext, useEffect } from "react";
import {
  ProductPageHighlightNumberItems,
  UsersPageHighlightNumberItems,
} from "../utils/constants";
import HighlightNumbersCard from "../components/common/HighlightNumberCard";
import UsersTable from "../components/users/UsersTable";
import { categoryData, salesData } from "../data/overviewData";
import PieChartCommon from "../components/common/PieChartCommon";
import LineChartCommon from "../components/common/LineChartCommon";
import {
  userActivityData,
  userDemographicsData,
  userGrowthData,
} from "../data/usersData";
import ToolContext from "../context/ToolContext";
import HeatMapChartCommon from "../components/common/HeatMapChartCommon";

function UsersPage() {
  const { setToolVal } = useContext(ToolContext);
  useEffect(() => {
    setToolVal((prev) => ({ ...prev, activeTab: 2 }));
  }, []);
  return (
    <div>
      <div className="flex justify-between mt-6">
        {UsersPageHighlightNumberItems.map((item, index) => (
          <HighlightNumbersCard
            key={index}
            icon={item.icon}
            name={item.name}
            number={item.value}
          />
        ))}
      </div>
      <div className="mt-6">
        <UsersTable />
      </div>
      <div className="flex my-6 justify-between ">
        <LineChartCommon
          chartTitle="User growth"
          data={userGrowthData}
          dataKey="users"
          xKey="month"
          yKey="users"
        />
        <HeatMapChartCommon
          data={userActivityData}
          xKey="name"
          chartTitle="User Activity Heatmap"
          width={550}
          height={300}
        />
      </div>
      <div className="mt-6">
        <PieChartCommon
          chartTitle="User Demographics"
          data={userDemographicsData}
          dataKey="value"
          fullLength={true}
        />
      </div>
    </div>
  );
}

export default UsersPage;
