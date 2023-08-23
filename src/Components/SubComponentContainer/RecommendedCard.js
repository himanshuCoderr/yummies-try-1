import React from "react";
import FriedRice from "../../images/RecommendedImg/FiredRice.png";
import { useState } from "react";

function RecommendedCard({recommendedText,recommendedAbout,recommendedPrice,recommendedImg}) {
    const [cartNum, setCartNum] = useState(0)
    // const [addedToCart , setAddedToCart] = useState(0)
    let addedTocart = 0
    function incrementCart () {
        let newVal = cartNum + 1
        setCartNum(newVal)
        console.log(cartNum + 1)
    }
    function decrementCart () {
        if(cartNum == 0){
            alert("cart is zero")
        }
        else{
            let newVal = cartNum - 1
            setCartNum(newVal)

        }
        console.log(cartNum)

    }
    
    function addToCart(){
        addedTocart = cartNum
        console.log("new val of Cart",addedTocart)
    }
    return (
    <div>
      <div className=" bg-[#202844] h-[350px] w-[300px] rounded-2xl flex items-center flex-col ">
        <img src={recommendedImg} alt="" className="w-[80%]  pt-4" />
        <p className=" text-[#FBF0D37A] text-lg font-bold">{recommendedText}</p>
        <p className="bg-[#B1F2A6] px-5 py-1 rounded-2xl font-bold">Rs. {recommendedPrice}</p>
        <p className="w-[80%] text-[#FBF0D37A]">
          {" "}
         {recommendedAbout}{" "}
        </p>
      </div>

      <div className="bg-[#BC3636] flex w-[200px] m-auto my-5 justify-around rounded-2xl">
        {" "}
        <button className="bg-[#D0F5D4] my-2  px-3 py-[2px] rounded-3xl text-sm font-semibold " onClick={addToCart} >Add to Cart</button>
        <div className="flex items-center justify-between w-[50px] text-lg text-white font-semibold" >
          <button onClick={decrementCart}>-</button>
          <p>{cartNum}</p>
          <button onClick={incrementCart} >+</button> 
        </div>
      
      </div>
    </div>
  );
}

export default RecommendedCard;
