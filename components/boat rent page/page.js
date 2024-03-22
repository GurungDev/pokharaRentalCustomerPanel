"use client";

import React, { useEffect, useState } from "react";
import Details from "./detail";
import FormSectionConsultancy from "./form";
import { getAllBoatList, getOneBoat } from "@/services/boat.service";
import { getOneRating } from "@/services/rating.service";
import MoreListings from "../swipper_more_listing";

const MainSection = ({ id }) => {
  const [boatData, setBoatData] = useState(null);
  const [storeBoatData, setstoreBoatData] = useState(null);

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
        setstoreBoatData(storeBoats?.data[0]);
        setRatingData(ratings?.data);
        setBoatData(boats?.data);
        console.log(storeBoats?.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <div className="layout">
        <div className=" flex flex-col min-[1100px]:flex-row  w-full items-start justify-between my-5">
          <div className="flex-col   w-full min-[1100px]:sticky flex-col min-[1100px]:w-[40%]   top-[10vh] ">
            <Details boatData={boatData} ratingData={ratingData} />
          </div>
          <div className=" w-full h-full flex-col min-[1100px]:w-[60%]  min-[1100px]:w-[55%]">
            <FormSectionConsultancy />
          </div>
        </div>
      </div>
      <MoreListings slides={storeBoatData} listing={"boats"}/>
    </div>
  );
};

export default MainSection;
