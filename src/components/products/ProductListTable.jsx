import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import { productData } from "../../data/productData";

function ProductListTable() {
  const [data, setData] = useState(productData);

  function sortData(type) {
    const sortedData = [...data].sort((a, b) => a[`${type}`] - b[`${type}`]);
    setData(sortedData);
  }

  function handleSelectChange(e) {
    sortData(e.target.value);
  }

  function removeItem(productId) {
    const filteredData = [...data].filter(
      (product) => product.id !== productId
    );
    setData(filteredData);
  }
  return (
    <div className="w-full p-6 border  border-slate-500/30 rounded-md shadow-all backdrop-blur-md">
      <div className="text-lg font-semibold flex items-center justify-between ">
        <span>Product list</span>
        <select
          name=""
          id=""
          className="pr-2 bg-white/50  rounded text-gray-700 cursor-pointer text-sm"
          onChange={handleSelectChange}
        >
          <option value="" disabled={true}>
            sort by
          </option>
          <option value="price">Price</option>
          <option value="stock">Stocks</option>
          <option value="sales">Sales</option>
        </select>
      </div>
      <div className="mt-4 p-1">
        <ul className="flex p-1.5">
          <li className="basis-[150px] flex-1">Name</li>
          <li className="flex-1">Category</li>
          <li className="flex-1">Price</li>
          <li className="flex-1">Stocks</li>
          <li className="flex-1">Sales</li>
          <li className="flex-1">Actions</li>
        </ul>
        <div>
          {data &&
            data.map((product, index) => (
              <ProductListItem
                productId={product.id}
                productImg={product.img}
                key={index}
                name={product.name}
                category={product.category}
                price={product.price}
                stock={product.stock}
                sales={product.sales}
                onDelete={removeItem}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListTable;
