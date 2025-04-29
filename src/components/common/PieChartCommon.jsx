import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
function PieChartCommon({
  chartTitle,
  data,
  dataKey,
  height = 300,
  width = 500,
  fullLength = false,
}) {
  const RADIAN = Math.PI / 180;
  const colors = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
  return (
    <div
      className={`border p-3 border-slate-500/30 rounded-md shadow-all backdrop-blur-md ${
        fullLength ? "w-full" : "w-fit"
      }`}
    >
      <div className="text-lg font-semibold ">{chartTitle}</div>
      <div
        className={`mt-6 ${fullLength && "mx-auto"}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={width} height={height}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKey}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  values={entry.value}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieChartCommon;
