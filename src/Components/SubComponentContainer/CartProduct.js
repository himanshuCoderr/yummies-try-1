import React from "react";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function CartProduct({name,price,quantity}) {

  let [cartNum, setCartNum] = useState(0);
  cartNum = quantity
  let addedTocart = 0;
  function incrementCart() {
    let newVal = cartNum + 1;
    setCartNum(newVal);
    console.log(cartNum + 1);
  }
  function decrementCart() {
    if (cartNum == 0) {
      alert("cart is zero");
    } else {
      let newVal = cartNum - 1;
      setCartNum(newVal);
    }
    console.log(cartNum);
  }

  function addToCart() {
    addedTocart = cartNum;
    console.log("new val of Cart", addedTocart);
  }
  return (
    <div className="w-[80vw] h-[60px] bg-[#202844] m-auto my-2 rounded-lg text-white flex justify-around">
      <div className="flex flex-row items-center w-[30%] justify-between ">
        <p>{name}</p>
        <p>Rs {price}</p>
      </div>
      <div className="flex flex-row items-center w-[30%] justify-between ">
        <div className="flex items-center justify-between w-[50px] text-lg text-white font-semibold">
          <button onClick={decrementCart}>-</button>
          <p>{cartNum}</p>
          <button onClick={incrementCart}>+</button>
        </div>
        <DeleteOutlineIcon className="text-white" />
      </div>
    </div>
  );
}

export default CartProduct;
