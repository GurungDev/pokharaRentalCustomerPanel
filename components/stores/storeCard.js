import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Ratings from "../ratings";
import { FaDirections } from "react-icons/fa";

const StoreCard = ({number, name, location, distance, ratings }) => {
  return (
    <div className="bg-zinc-200 shadow-sm hover:shadow-md duration-300 rounded-md px-6 py-5 w-full gap-5 flex items-center">
      {/* <div className="secondary-title text-secondary ">{number}</div> */}
      <div className=" flex items-center justify-between  w-full">
        <div className="grid">
          <h1 className="paragraph text-secondary font-semibold">{name}</h1>
          <h1 className="small  text-[#5f6368]">{location}</h1>
        </div>
        <div className="grid gap-3 items-center ">
          <FaLocationCrosshairs className="text-[1.2rem] text-neutral-700 text-center w-full " />
          <div className="small text-[#5f6368]">{distance} km</div>
        </div>
        <div className="grid gap-3 items-center">
          <Ratings count={1} />
          <h1 className="small  text-[#5f6368]">{ratings}</h1>
        </div>
        <div className="grid gap-3 items-center">
            <FaDirections className="text-[1.2rem] text-neutral-700 text-center w-full " />
          <h1 className="small  text-[#5f6368]">Indications</h1>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
