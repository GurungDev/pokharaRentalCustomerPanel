"use client";
import { useState } from "react";
import { Slider } from "../ui/slider";
import StoreCard from "./storeCard";
import StoreCardList from "./storeCardList";

const StoreList = () => {
  const [km, setKm] = useState(1);
  return (
    <div>
      <div className="w-full py-5">
        <div className="small pb-4 text-[#5f6368]">
          Distance from you: {km} Km
        </div>
        <Slider
          defaultValue={[km]}
          max={100}
          step={1}
          onValueChange={(value) => {
            setKm(value);
          }}
        />
      </div>
        <StoreCardList />
    </div>
  );
};

export default StoreList;
