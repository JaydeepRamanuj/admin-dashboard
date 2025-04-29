import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function LineChartCommon({
  data,
  xKey,
  yKey,
  dataKey,
  chartTitle,
  height = 300,
  width = 500,
}) {
  return (
    <div
      className={`w-fit border p-3 border-slate-500/30 rounded-md shadow-all backdrop-blur-md`}
    >
      <div className="text-lg font-semibold ">{chartTitle}</div>
      <div
        className={`mt-6`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={width}
            height={height}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis dataKey={yKey} />
            <legend />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChartCommon;
