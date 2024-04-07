"use client";
import Map from "@/components/map";
import ServiceBenefits from "../../../components/benefit";
import Ratings from "../../../components/ratings";
import MainListing from "../../../components/single boat page/imageSlider";
import MoreListings from "../../../components/swipper_more_listing";
import { toast } from "../../../components/ui/use-toast";
import {
  getAllBoatList,
  getHighLight,
  getOneBoat,
} from "../../../services/boat.service";
import { getOneRating } from "../../../services/rating.service";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { IoMdArrowBack } from "react-icons/io";
import { IoPricetagsOutline, IoStorefront } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import MapComponent from "@/components/mapComponent";

export const MapContext = createContext();
const SingleBoatPage = () => {
  const { id } = useParams();
  const [boatData, setBoatData] = useState(null);
  const [highlightData, sethighlightData] = useState(null);
  const [storeBoatData, setstoreBoatData] = useState(null);
  const [userLat, setuserLat] = useState();
  const [userLong, setuserLong] = useState();
  const [distance, setdistance] = useState(null);

  const [long, setLong] = useState(null);
  const [ltd, setLtd] = useState(null);
  const { push } = useRouter();
  const [ratingData, setRatingData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const boats = await getOneBoat(id);
        const storeBoats = await getAllBoatList({
          data: { storeId: boats?.data?.store?.id },
        });
        const ratings = await getOneRating({
          data: { ratingFor: "boat", issueId: id },
        });
        const highlight = await getHighLight({
          issueId: id,
          highlightFor: "boat",
        });
        sethighlightData(highlight?.data);
        setstoreBoatData(storeBoats?.data[0]);
        setRatingData(ratings?.data);
        setBoatData(boats?.data);
        console.log(boats)
        setLong(boats?.data?.store?.location?.coordinates[1]);
        setLtd(boats?.data?.store?.location?.coordinates[0]);
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
        <Link href={"/boats"} className="flex gap-2 items-center group">
          <IoMdArrowBack
            size={15}
            className="group-hover:translate-x-[-9px] duration-300"
          />
          <small className="text-neutral-500 small">Get back</small>
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="title font-[200] py-2">{boatData?.title}</h1>
            <div className="flex gap-2">
              <Ratings count={ratingData?.rating || 1} />
              {ratingData?.totalRating || 0}
            </div>
          </div>
          <p className="paragraph py-10">{boatData?.description}</p>
        </div>

        <div className="flex flex-col min-[1100px]:flex-row items-start w-full justify-between gap-[3rem]">
          <div className=" min-[1100px]:sticky min-[1100px]:top-[10vh]  grid gap-[2rem] w-[90%] min-[1100px]:w-[30%] ">
            <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span> Cost Per Person</span>
                  <IoPricetagsOutline className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small"> {boatData?.priceInRs}</p>
              </div>

              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Capacity</span>
                  <MdOutlineLocationOn className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small">{boatData?.capacity}</p>
              </div>

              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Store</span>
                  <IoStorefront className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small">{boatData?.store?.name}</p>
              </div>
            </div>
            <div>
              <Link
                href={`/boats/${id}/rent`}
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
                href={"/store/" + boatData?.store?.id}
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
              imageList={[boatData?.thumbnail, boatData?.secondaryImage]}
            />
            <ServiceBenefits
              title="Some of the highlights are: "
              benefits={highlightData}
            />

            <div className="google-map-code w-[90%] float-right pb-10">
              <p className=" font-[300] secondary-title pt-4 pb-6 text-text">
                Location of the boat
              </p>
              <div className="rounded-md overflow-hidden">
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
                  }}
                >
                  <MapComponent />
                </MapContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreListings slides={storeBoatData} listing={"boats"} />
    </div>
  );
};

export default SingleBoatPage;
