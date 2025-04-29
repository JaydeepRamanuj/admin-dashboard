import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
function RadarChartCommon({
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
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Segment A"
              dataKey="A"
              stroke="#ff8042"
              fill="#ff8042"
              fillOpacity={0.6}
            />
            <Radar
              name="Segment B"
              dataKey="B"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadarChartCommon;
