import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";

function AnalyticsHighlightsNumberCard({
  name,
  icon,
  number,
  percentage,
  isGrowing,
}) {
  return (
    <div className="w-fit py-3 px-5  border border-slate-500/30 rounded-md  shadow-all backdrop-blur-md flex-1 hover:scale-105 hover:-translate-y-0.5 transition-all cursor-pointer max-w-[250px] ">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col">
          <span className="text-gray-400">{name}</span>
          <span className="text-lg font-bold">{number}</span>
        </div>
        <span
          className={`size-10 flex justify-center items-center rounded-full ${
            isGrowing
              ? "bg-green-200/20 text-green-400"
              : "bg-red-200/20 text-red-400"
          }`}
        >
          {icon}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className={`${isGrowing ? " text-green-500" : " text-red-500"}`}>
          {isGrowing ? <IoMdTrendingUp /> : <IoMdTrendingDown />}
        </span>
        <span className={`${isGrowing ? " text-green-500" : " text-red-500"}`}>
          {percentage}%
        </span>
        <span>vs last period</span>
      </div>
    </div>
  );
}

export default AnalyticsHighlightsNumberCard;
