"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { IoMdArrowBack } from "react-icons/io";
import { IoPricetagsOutline, IoStorefront } from "react-icons/io5";
import ServiceBenefits from "../../../components/benefit";
import Ratings from "../../../components/ratings";
import MainListing from "../../../components/single cycle page/imageSlider";
import MoreListings from "../../../components/swipper_more_listing";
import { getAllcycleList, getOnecycle } from "../../../services/cycle.service";
import { getOneRating } from "../../../services/rating.service";
import { getHighLight } from "@/services/boat.service";
import { MapContext } from "@/app/boats/[id]/page";
import MapComponent from "@/components/mapComponent";

const SingleCyclePage = () => {
  const { id } = useParams();
  const [cycleData, setcycleData] = useState(null);
  const [storeCycleData, setstoreCycleData] = useState(null);
  const [highlightData, sethighlightData] = useState(null);
  const [ratingData, setRatingData] = useState(null);
  const [distance, setdistance] = useState(null);
  const [userLat, setuserLat] = useState();
  const [userLong, setuserLong] = useState();
  const [long, setLong] = useState(null);
  const [ltd, setLtd] = useState(null);
  const [locationPermisson, setLocationPermission] = useState(false);

  const { push } = useRouter();
  useEffect(() => {
    async function getData() {
      try {
        const cycles = await getOnecycle(id);
        const storeBoats = await getAllcycleList({
          data: { storeId: cycles?.data?.store?.id },
        });
        const ratings = await getOneRating({
          data: { ratingFor: "cycle", issueId: id },
        });
        const highlight = await getHighLight({
          issueId: id,
          highlightFor: "cycle",
        });
        sethighlightData(highlight?.data);
        setcycleData(cycles?.data);
        setstoreCycleData(storeBoats?.data[0]);
        setRatingData(ratings?.data);

        setLong(cycles?.data?.store?.location?.coordinates[1]);
        setLtd(cycles?.data?.store?.location?.coordinates[0]);
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
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "denied") {
          } else {
            setLocationPermission(true);
          }
        });
    }
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
          <div className=" min-[1100px]:sticky min-[1100px]:top-[10vh] grid gap-[2rem] w-[90%] min-[1100px]:w-[30%] ">
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
            <div>
              <Link
                href={`/cycles/${id}/rent`}
                className="bg-primary border-[2px] border-[#3586ff] hover:border-[#FE2A2A] btn text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph flex items-center justify-between gap-3"
              >
                {" "}
                <span>Book Now</span>
                <GiConfirmed
                  size={25}
                  className="group-hover:translate-x-[7px] duration-300"
                />
              </Link>
              <Link
                href={"/store/" + cycleData?.store?.id}
                className="bg-white  mt-[1rem] btn text-[#FE2A2A] border-[2px] border-[#FE2A2A]  hover:text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph flex items-center justify-between gap-3"
              >
                {" "}
                <span>Visit Store</span>
                <GiConfirmed
                  size={25}
                  className="group-hover:translate-x-[7px] duration-300"
                />
              </Link>
            </div>
          </div>
          <div className="w-[90%] min-[1100px]:w-[75%] ">
            <MainListing
              imageList={[cycleData?.thumbnail, cycleData?.secondaryImage]}
            />
            <ServiceBenefits
              title="Some of the highlights are: "
              benefits={highlightData}
            />
            <div className="google-map-code w-[90%] float-right pb-10">
              <p className=" font-[300] secondary-title pt-4 pb-6 text-text">
                Location of the boat
              </p>
              <MapContext.Provider
                value={{
                  ltd,
                  long,
                  setLtd,
                  setLong,
                  userLong,
                  setuserLong,
                  userLat,
                  setuserLat,
                  distance,
                  setdistance,
                  locationPermisson,
                  setLocationPermission,
                }}
              >
                <MapComponent />
              </MapContext.Provider>
            </div>
          </div>
        </div>
      </div>
      <MoreListings slides={storeCycleData} listing={"cycles"} />
    </div>
  );
};

export default SingleCyclePage;
