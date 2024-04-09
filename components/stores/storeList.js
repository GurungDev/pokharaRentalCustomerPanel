"use client";
import { useContext, useState } from "react";
import { Slider } from "../ui/slider";
import StoreCard from "./storeCard";
import StoreCardList from "./storeCardList";
import { StoreListMapContext } from "@/app/store/page";

const StoreList = () => {
  const { km, setKm, storeList, locationPermisson } =
    useContext(StoreListMapContext);
  return (
    <div>
      {locationPermisson && (
        <div className="w-full py-5">
          <div className="small pb-4 text-[#5f6368]">
            Distance from you: {km} Km
          </div>
          <Slider
            defaultValue={[km]}
            max={500}
            step={1}
            onValueChange={(value) => {
              setKm(value);
              console.log(value);
            }}
          />
        </div>
      )}
      <StoreCardList />
    </div>
  );
};

export default StoreList;
