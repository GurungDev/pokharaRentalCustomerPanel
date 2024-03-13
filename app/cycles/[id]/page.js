"use client";
import ServiceBenefits from "@/components/benefit";
import Ratings from "@/components/ratings";
import MainListing from "@/components/single cycle page/imageSlider";
import MoreListings from "@/components/swipper_more_listing";
import { getAllcycleList, getOnecycle } from "@/services/cycle.service";
import { getOneRating } from "@/services/rating.service";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { IoMdArrowBack } from "react-icons/io";
import { IoPricetagsOutline, IoStorefront } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const SingleCyclePage = () => {
  const { id } = useParams();
  const [cycleData, setcycleData] = useState(null);
  const [storeCycleData, setstoreCycleData] = useState(null);
  const [ratingData, setRatingData] = useState(null);
  const { push } = useRouter();
  useEffect(() => {
    async function getData() {
      try {
        const cycles = await getOnecycle(id);
        const storeBoats = await getAllcycleList({data: {storeId: cycles?.data?.store?.id}});
        const ratings = await getOneRating({
          data: { ratingFor: "cycle", issueId: id },
        });
        setcycleData(cycles?.data);
        setstoreCycleData(storeBoats?.data[0])
        setRatingData(ratings?.data);
        console.log(ratings);
      } catch (error) {
        console.log(error.message);
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description:
            error.response?.data?.message || "Couldn't connect to the server",
        });
      }
    }
    getData();
  }, []);
  return (
    <div className="py-28 ">
      <div className="layout ">
        <Link href={"/cycles"} className="flex gap-2 items-center group">
          <IoMdArrowBack
            size={15}
            className="group-hover:translate-x-[-9px] duration-300"
          />
          <small className="text-neutral-500 small">Get back</small>
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="title font-[200] py-2">{cycleData?.title}</h1>
            <div className="flex gap-2">
              <Ratings count={ratingData?.rating || 1} />
              {ratingData?.totalRating || 0} 
            </div>
          </div>
          <p className="paragraph py-10">{cycleData?.description}</p>
        </div>

        <div className="flex flex-col min-[1100px]:flex-row items-start w-full justify-between gap-[3rem]">
          <div className=" sticky top-[10vh] grid gap-[2rem] w-[90%] min-[1100px]:w-[30%] ">
            <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span> Cost Per Person</span>
                  <IoPricetagsOutline className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small"> {cycleData?.priceInRs}</p>
              </div>

              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Store</span>
                  <IoStorefront className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small"> {cycleData?.store?.name}</p>
              </div>
            </div>
            <div className="bg-primary  btn text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph flex items-center justify-between gap-3">
              {" "}
              <span>Book Now</span>
              <GiConfirmed
                size={25}
                className="group-hover:translate-x-[7px] duration-300"
              />
            </div>
          </div>
          <div className="w-[90%] min-[1100px]:w-[75%] ">
            <MainListing
              imageList={[cycleData?.thumbnail, cycleData?.secondaryImage]}
            />
            <ServiceBenefits
              title="Some of the highlights are: "
              benefits={[
                "Durable and fun",
                "Highly available and reliable ",
                "Cost optimisation and saving costs",
                "Safety equipment provided",
              ]}
            />
            <div className="google-map-code w-[90%] float-right pb-10">
              <p className=" font-[300] secondary-title pt-4 pb-6 text-text">
                Location of the boat
              </p>
              <div className="rounded-md overflow-hidden">
                <iframe
                  src={`https://maps.google.com/maps?${cycleData?.store?.location?.coordinates[0]},${cycleData?.store?.location?.coordinates[1]}&hl=en&z=14&output=embed`}
                  width="600"
                  height="450"
                  className="w-full border-[2px] shadow-md"
                  aria-hidden="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreListings
        slides={storeCycleData}
      />
    </div>
  );
};

export default SingleCyclePage;
