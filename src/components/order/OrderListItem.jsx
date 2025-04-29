import React from "react";
import { FaEye } from "react-icons/fa";

function OrderListItem({ orderId, customerName, total, status, date }) {
  function findStatusColor() {
    console.log(status);
    if (status == "Pending") {
      return "bg-red-300 text-red-500";
    } else if (status == "Processing") {
      return "bg-orange-200 text-orange-500";
    } else if (status == "Shipped") {
      return "bg-blue-300 text-blue-500";
    } else if (status == "Delivered") {
      return "bg-green-200 text-green-500";
    } else {
      return "bg-gray-300 text-gray-500";
    }
  }

  return (
    <div className="flex my-1.5 p-1.5 border-t border-t-gray-500/30 hover:bg-white/5 text-gray-400 font-semibold rounded-md">
      <div className="flex-1">
        <span>{orderId}</span>
      </div>
      <div className="flex-1">
        <span>{customerName}</span>
      </div>
      <div className="flex-1 items-center">{total}</div>
      <div className="flex-1 items-center ">
        <span
          className={`bg-blue-600text-center rounded-full px-2 py-0.5 text-xs ${findStatusColor()}`}
        >
          {status}
        </span>
      </div>
      <div className={`flex-1 items-center`}>
        <span>{date}</span>
      </div>
      <div className="flex-1  flex items-center gap-2">
        <FaEye />
      </div>
    </div>
  );
}

export default OrderListItem;
