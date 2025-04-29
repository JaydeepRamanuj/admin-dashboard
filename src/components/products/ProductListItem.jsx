import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

function ProductListItem({
  productId,
  productImg,
  name,
  category,
  price,
  stock,
  sales,
  onDelete,
}) {
  return (
    <div className="flex my-1.5 p-1.5 border-t border-t-gray-500/30 hover:bg-white/5 text-gray-400 font-semibold rounded-md">
      <div className="basis-[150px] flex-1 flex gap-2 items-center">
        <img className="size-8 rounded-full" src={productImg} alt="" />
        <span>{name}</span>
      </div>
      <div className="flex-1 items-center">{category}</div>
      <div className="flex-1 items-center">{price}</div>
      <div className="flex-1 items-center">{stock}</div>
      <div className="flex-1 items-center">{sales}</div>
      <div className="flex-1  flex items-center gap-2">
        <TbEdit className="cursor-pointer text-xl hover:text-blue-400" />
        <MdDeleteOutline
          className="cursor-pointer text-xl hover:text-red-400"
          onClick={() => {
            onDelete(productId);
          }}
        />
      </div>
    </div>
  );
}

export default ProductListItem;
