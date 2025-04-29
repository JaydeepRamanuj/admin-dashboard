import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
function BarChartCommon({
  data,
  chartTitle,
  dataKey,
  xKey,
  yKey,
  height = 400,
  width = 1000,
  fullLength = true,
}) {
  return (
    <div
      className={`border p-3 border-slate-500/30 rounded-md shadow-all backdrop-blur-md ${
        fullLength ? "w-full" : "w-fit"
      }`}
    >
      <div className="text-lg font-semibold ">{chartTitle}</div>
      <div
        className={`mt-6`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey={dataKey} fill="#8884d8">
              <LabelList
                dataKey={dataKey}
                position="inside"
                fill="#ffffff"
                fontSize={24}
              />
            </Bar>
            <XAxis dataKey={xKey} stroke="#8884d8" />
            <YAxis dataKey={yKey} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartCommon;
