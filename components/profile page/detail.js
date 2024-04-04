"use client";
import Image from "next/image";
import { BsCalendarDate } from "react-icons/bs";
import { FaRankingStar } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import { IoPricetags, IoPricetagsOutline } from "react-icons/io5";
import {
  MdOutlinePayments,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import generatePDF from "react-to-pdf";
import { toast } from "../ui/use-toast";
import Ratings from "../ratings";
import { giveRate } from "@/services/rating.service";
import Rate from "../giveRating";
import { useState } from "react";

const Details = ({
  quantity,
  totalPriceInRs,
  priceOfSingleProduct,
  bookingDate,
  durationInHour,
  paymentType,
  listingName,
  listingDescription,
  thumbnail,
  listingId,
  ratingFor,
  transaction_uuid,
}) => {
  const options = {
    method: "open",

    resolution: 3,
    page: {
      margin: 50,

      format: "letter",

      orientation: "landscape",
    },
  };
  const [rating, setRating] = useState(false);
  const getTargetElement = () => document.getElementById("content-id");

  return (
    <div className="">
      <div className="flex gap-3 items-center justify-between">
        <button
          className="px-4 py-2 small hover:translate-x-[10px] duration-300  bg-blue-600 text-white bg border-[1px] rounded-t-xl"
          onClick={() => generatePDF(getTargetElement, options)}
        >
          Download PDF
        </button>
        <div>
          {rating ? (
            <Rate listingId={listingId} ratingFor={ratingFor} />
          ) : (
            <button
              className="px-4 py-2 small hover:translate-x-[-10px] duration-300  bg-blue-600 text-white bg border-[1px] rounded-t-xl"
              onClick={() => setRating(true)}
            >
              Give Rating
            </button>
          )}
        </div>
      </div>
      <div
        id="content-id"
        className="min-[1100px]:flex  items-stretch shadow-md"
      >
        <div className="min-[1100px]:w-[60%]  ">
          <div className="w-full">
            <div className="w-full !flex  !flex-col gap-5 group !items-center !justify-center relative min-h-[300px] rounded-bl-xl overflow-hidden ">
              <Image
                src={thumbnail || "/lakesideBoat.jpg"}
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
                  <h1 className="text-2xl font-[600] text-white py-2">
                    {listingName}
                  </h1>
                </div>
                <p className="mb-2 mt-5 duration-300 text-neutral-200 text-[.9rem] font-[300] small lg:text-[1rem]  min-[1900px]:text-[1.1rem] ">
                  {listingDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-[1100px]:w-[40%] bg-neutral-100 grid  px-6 py-3 rounded-r-xl border-[1px]">
          <div className="flex flex-col gap-3 border-b-[1px]  ">
            <div className="group small flex items-center gap-3 text-neutral-600">
              {" "}
              <span>Order ID</span>
              <FaRankingStar className="group-hover:translate-x-[7px] duration-300" />
            </div>
            <p className="small">{transaction_uuid}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="group small flex items-center gap-3 text-neutral-600">
              {" "}
              <span>Quantity</span>
              <MdOutlineProductionQuantityLimits className="group-hover:translate-x-[7px] duration-300" />
            </div>
            <p className="small">{quantity}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="group small flex items-center gap-3 text-neutral-600">
              {" "}
              <span>Total Cost</span>
              <IoPricetags className="group-hover:translate-x-[7px] duration-300" />
            </div>
            <p className="small">Rs {totalPriceInRs}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="group small flex items-center gap-3 text-neutral-600">
              {" "}
              <span>Unit price</span>
              <IoPricetagsOutline className="group-hover:translate-x-[7px] duration-300" />
            </div>
            <p className="small">Rs {priceOfSingleProduct}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="group small flex items-center gap-3 text-neutral-600">
              {" "}
              <span>Date</span>
              <BsCalendarDate className="group-hover:translate-x-[7px] duration-300" />
            </div>
            <p className="small">
              {new Date(bookingDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="group small flex items-center gap-3 text-neutral-600">
              {" "}
              <span>Duration</span>
              <GiDuration className="group-hover:translate-x-[7px] duration-300" />
            </div>
            <p className="small">{durationInHour} hour</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="group small flex items-center gap-3 text-neutral-600">
              {" "}
              <span>Payment Type</span>
              <MdOutlinePayments className="group-hover:translate-x-[7px] duration-300" />
            </div>
            <p className="small">{paymentType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
