import React from "react";
import RecommendedCard from "./RecommendedCard";
import ChickenBiryani from "../../images/RecommendedImg/ChickenBriyani.png";
import FriedRice from "../../images/RecommendedImg/FiredRice.png";
import FriedGolGappe from "../../images/RecommendedImg/Fried GolGappe.png";
import MalaiChickenCurry from "../../images/RecommendedImg/Malai Chicken Curry.png";
import Momos from "../../images/RecommendedImg/Momos.png";
import Noodles from "../../images/RecommendedImg/Noodles.png";
import data from '../../data.json'
const RecommendedData = [
  {
    id: 1,
    recommendedText: "Fried Rice",
    recommendedAbout:
      "Our fried rice is made from the finest ingredients and veggie...",
    recommendedPrice: 150,
    recommendedImg: FriedRice,
  },
  {
    id: 2,
    recommendedText: "Chicken Biryani",
    recommendedAbout:
      "Our fried rice is made from the finest ingredients and veggie...",
    recommendedPrice: 150,
    recommendedImg: ChickenBiryani,
  },
  {
    id: 3,
    recommendedText: "Noodles",
    recommendedAbout:
      "Our fried rice is made from the finest ingredients and veggie...",
    recommendedPrice: 150,
    recommendedImg: Noodles,
  },
  {
    id: 4,
    recommendedText: "Malai Chicken Curry",
    recommendedAbout:
      "Our fried rice is made from the finest ingredients and veggie...",
    recommendedPrice: 150,
    recommendedImg: MalaiChickenCurry,
  },
  {
    id: 5,
    recommendedText: "Fried Momos",
    recommendedAbout:
      "Our fried rice is made from the finest ingredients and veggie...",
    recommendedPrice: 150,
    recommendedImg: FriedRice,
  },
  {
    id: 6,
    recommendedText: "Fried GolGappe",
    recommendedAbout:
      "Our fried rice is made from the finest ingredients and veggie...",
    recommendedPrice: 150,
    recommendedImg: FriedGolGappe,
  },
];
function RecommendedCardCont() {
  console.log(data.Recommended)
  return (
    <div className=" w-[80vw] m-auto ">
      <h2 className="text-2xl my-7">Recommended</h2>
      <div className="flex flex-wrap gap-y-12  items-center justify-between">
        {data.Recommended.map((data) => (
          <RecommendedCard
            key={data.id}
            recommendedText={data.name}
            recommendedAbout={data.description}
            recommendedPrice={data.price}
            recommendedImg={data.image}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedCardCont;
