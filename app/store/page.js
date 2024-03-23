"use client";
import ConnectCompany from "../../components/connectBanner";
import MapComponent from "../../components/stores/mapComponent";
import StoreList from "../../components/stores/storeList";
 
import React, { useState } from "react";

const StoreNearMePage = () => {
  return (
    <div>
      <div className="py-14 layout">
        {" "}
        <div className="w-[70%]">
          <h1 className="secondary-title  my-5 mt-[2rem]">
            Locate Stores Near You
          </h1>
          <p className="paragraph mb-2  text-[#5f6368]">
            Discover nearby stores effortlessly using our intuitive map
            interface, making shopping convenient and accessible for you.
          </p>
        </div>
        <div className=" flex flex-col min-[1100px]:flex-row justify-between gap-7">
          <div className="h-[80vh] min-[1100px]:w-[55%]">
            <MapComponent className="h-[80vh] " />
          </div>
          <div className="h-[80vh]  min-[1100px]:w-[45%] ">
            <StoreList />
          </div>
        </div>
      </div>
      <ConnectCompany />
    </div>
  );
};

export default StoreNearMePage;
