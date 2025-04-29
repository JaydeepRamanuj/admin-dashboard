import React, { useContext, useEffect } from "react";
import LineChartCommon from "../components/common/LineChartCommon";
import { categoryData, salesData } from "../data/overviewData";
import PieChartCommon from "../components/common/PieChartCommon";
import BarChartCommon from "../components/common/BarChartCommon";

import { ProductPageHighlightNumberItems } from "../utils/constants";
import HighlightNumbersCard from "../components/common/HighlightNumberCard";
import ProductListTable from "../components/products/ProductListTable";
import ToolContext from "../context/ToolContext";

function ProductsPage() {
  const { setToolVal } = useContext(ToolContext);
  useEffect(() => {
    setToolVal((prev) => ({ ...prev, activeTab: 1 }));
  }, []);
  return (
    <div className="mx-auto flex-col overflow-auto">
      <div className="flex justify-between mt-6">
        {ProductPageHighlightNumberItems.map((item, index) => (
          <HighlightNumbersCard
            key={index}
            icon={item.icon}
            name={item.name}
            number={item.value}
          />
        ))}
      </div>
      <div className="mt-6">
        <ProductListTable />
      </div>
      <div className="flex my-6 justify-between ">
        <LineChartCommon
          chartTitle="Sales Trend"
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
    </div>
  );
}

export default ProductsPage;
