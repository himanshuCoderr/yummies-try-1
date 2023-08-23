import React from "react";
import Navbar from "../Components/Navbar";
import CartProduct from "../Components/SubComponentContainer/CartProduct";
import data from '../data.json'

function MyCartPage() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-[40vw] m-auto">
          <p className="mb-2">Estimated time</p>
          <p className=" h-[60px] bg-[#DFE3E8] rounded-xl flex items-center pl-5 ">
            Delivery in <span className="ml-5 font-semibold">25-30 mins </span>
          </p>
          <p className="text-center my-3">item(s) added</p>
        </div>
{
  data.cart.map((data)=>(
     <CartProduct key={data.id} name={data.name} price={data.price} quantity={data.quantity} />
  ))
}
        <div className="flex w-[80vw] m-auto justify-between my-10">
          <div className="w-[35vw] h-[300px] bg-slate-200">
            <p className="text-center my-5 font-bold text-xl">user info</p>
            <div className=" bg-white h-[200px] w-[90%] m-auto leading-10 pl-8 font-semibold">
              <p>Name : Manisha Yadav</p>
              <p>Address: Phase 2, Hinjewadi , 411009 ,Pune</p>
              <p>Email:abc@gmail.com</p>
            </div>
          </div>
          <div className="w-[35vw] h-[300px] bg-slate-200">
            <p className="text-center my-5 font-bold text-xl">Bill summary</p>
            <div className="bg-white h-[200px] w-[90%] m-auto leading-10 pl-8 font-semibold">
              <p>Total items : 4</p>
              <p>Total Amount: Rs.390/-</p>
              <button className="w-[90%] text-right"> <span className="bg-[#E11A1A] px-12 py-2 text-white rounded-2xl" >Pay</span> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCartPage;
