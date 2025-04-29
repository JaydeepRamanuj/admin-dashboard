import React from "react";

function HighlightNumbersCard({ name, icon, number }) {
  return (
    <div className="w-fit py-3 px-5  border border-slate-500/30 rounded-md  shadow-all backdrop-blur-md flex-1 hover:scale-105 hover:-translate-y-0.5 transition-all cursor-pointer max-w-[250px] ">
      <div className="flex gap-2 items-center text-slate-500 font-semibold">
        <span>{icon}</span>
        <span>{name}</span>
      </div>
      <div className="text-xl font-bold">{number}</div>
    </div>
  );
}

export default HighlightNumbersCard;
