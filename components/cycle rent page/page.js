"use client";

import React, { useEffect, useState } from "react";
import Details from "./detail";
import FormSectionConsultancy from "./form";
 
import { getOneRating } from "@/services/rating.service";
import MoreListings from "../swipper_more_listing";
import { getAllcycleList, getOnecycle } from "@/services/cycle.service";

const MainSection = ({ id }) => {
  const [cycleData, setcycleData] = useState(null);
  const [storecycleData, setstorecycleData] = useState(null);

  const [ratingData, setRatingData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const cycles = await getOnecycle(id);
        const storecycles = await getAllcycleList({
          data: { storeId: cycles?.data?.store?.id },
        });
        const ratings = await getOneRating({
          data: { ratingFor: "cycle", issueId: id },
        });
        setstorecycleData(storecycles?.data[0]);
        setRatingData(ratings?.data);
        setcycleData(cycles?.data);
        console.log(storecycles?.data[0]);
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
            <Details cycleData={cycleData} ratingData={ratingData} />
          </div>
          <div className=" w-full h-full flex-col min-[1100px]:w-[60%]  min-[1100px]:w-[55%]">
            <FormSectionConsultancy id={id}/>
          </div>
        </div>
      </div>
      <MoreListings slides={storecycleData} listing={"cycles"}/>
    </div>
  );
};

export default MainSection;
