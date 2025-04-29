import React, { useState } from "react";
import OrderListItem from "./OrderListItem";
import { orderData } from "../../data/ordersData";
import { CiSearch } from "react-icons/ci";

function OrderTable() {
  const originalData = orderData;
  const [data, setData] = useState(orderData);
  const [value, setValue] = useState("");

  function searchOrder(orderId) {
    if (orderId == "") {
      setData(originalData);
    } else {
      const filteredData = [...data].filter((order) =>
        order.id.includes(orderId)
      );
      setData(filteredData);
    }
  }

  function handleSearch(e) {
    console.log(e.target.value);
    setValue(e.target.value);
    searchOrder(e.target.value);
  }

  return (
    <div className="w-full p-6 border  border-slate-500/30 rounded-md shadow-all backdrop-blur-md">
      <div className="text-lg font-semibold flex items-center justify-between ">
        <span>Order List</span>
        <span className="bg-white/10 rounded-md flex gap-2 items-center px-2 focus-within:outline outline-1">
          <CiSearch />
          <input
            type="text"
            name=""
            id=""
            value={value}
            placeholder="Search orders"
            className="bg-transparent py-1 outline-none"
            onInput={handleSearch}
          />
        </span>
      </div>
      <div className="mt-4 p-1">
        <ul className="flex p-1.5">
          <li className="flex-1">Order Id</li>
          <li className="flex-1">Customer</li>
          <li className="flex-1">Total</li>
          <li className="flex-1">Status</li>
          <li className="flex-1">Date</li>
          <li className="flex-1">Actions</li>
        </ul>
        <div>
          {data &&
            data.map((order, index) => (
              <OrderListItem
                key={index}
                orderId={order.id}
                customerName={order.customer}
                total={order.total}
                date={order.date}
                status={order.status}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default OrderTable;
