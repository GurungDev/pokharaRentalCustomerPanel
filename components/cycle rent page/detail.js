import Image from "next/image";
import React from "react";
import Ratings from "../ratings";
import { IoPricetagsOutline, IoStorefront } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const Details = ({ cycleData, ratingData }) => {
  return (
    <div className="w-full">
      <div className="w-full !flex mb-8 !flex-col gap-5 group !items-center !justify-center relative min-h-[450px] rounded-xl overflow-hidden ">
        <Image
          src={cycleData?.thumbnail}
          alt="Server"
          width={400}
          height={400}
          className="object-cover w-full h-full absolute group-hover:scale-[1.03] duration-300 group-hover:brightness-[70%] "
        />
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
          }}
          className="absolute inset-0 "
        ></div>
        <div className="absolute w-full group h-full flex flex-col justify-end   p-8   ">
          <div className={`w-[30px] h-[5px] bg-red-600`}></div>
          <div className="flex items-center justify-between">
            <h1 className="secondary-title  font-[600] text-white py-2">
              {cycleData?.title}
            </h1>
          </div>
          <p className="mb-2 mt-5 duration-300 text-neutral-200 text-[.9rem]   lg:text-[1rem]  min-[1900px]:text-[1.1rem] ">
            {cycleData?.description}
          </p>
          <div className="flex gap-2 text-white">
            <Ratings count={ratingData?.rating || 1} />
            {ratingData?.totalRating || 0}
          </div>
        </div>
      </div>
      <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
        <div className="">
          <div className="group paragraph flex items-center gap-3 text-neutral-600">
            {" "}
            <span> Cost Per Person</span>
            <IoPricetagsOutline className="group-hover:translate-x-[7px] duration-300" />
          </div>
          <p className="small"> Rs {cycleData?.priceInRs}</p>
        </div>

      

        <div className="">
          <div className="group paragraph flex items-center gap-3 text-neutral-600">
            {" "}
            <span>Store</span>
            <IoStorefront className="group-hover:translate-x-[7px] duration-300" />
          </div>
          <p className="small">{cycleData?.store?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
