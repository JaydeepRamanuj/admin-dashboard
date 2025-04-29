import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function AreaChartCommon({
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
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis dataKey={yKey} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaChartCommon;
