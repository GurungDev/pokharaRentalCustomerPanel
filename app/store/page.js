"use client";
import MapComponent from "@/components/store list/mapComponent";
import ConnectCompany from "../../components/connectBanner";
import StoreList from "../../components/stores/storeList";

import React, { createContext, useEffect, useState } from "react";
import { getAllStoreList } from "@/services/store.service";
import { toast } from "@/components/ui/use-toast";
import { title } from "process";
export const StoreListMapContext = createContext();
const StoreNearMePage = () => {
  const [distance, setdistance] = useState(null);
  const [long, setLong] = useState(null);
  const [ltd, setLtd] = useState(null);
  const [userLat, setuserLat] = useState();
  const [userLong, setuserLong] = useState();
  const [storeList, setstoreList] = useState();
  const [km, setKm] = useState(100);

  useEffect(() => {
    const getLocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              fetchData(position.coords.longitude, position.coords.latitude);
              setLtd(position.coords.latitude);
              setLong(position.coords.longitude);
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };

    const fetchData = async (long, lat) => {
      try {
        console.log(long, lat);
        const storeListData = await getAllStoreList({ long: long, lat: lat });
        setstoreList(storeListData.data);
      } catch (error) {
        console.error("Error getting location or fetching data:", error);
      }
    };

    getLocation();
  }, []);

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
        <StoreListMapContext.Provider
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
            storeList,
            km,
            setKm,
          }}
        >
          <div className=" flex flex-col min-[1100px]:flex-row justify-between gap-7">
            <div className="h-[80vh] min-[1100px]:w-[55%]">
              <MapComponent />
            </div>
            <div className="h-[80vh]  min-[1100px]:w-[45%] ">
              <StoreList />
            </div>
          </div>
        </StoreListMapContext.Provider>
      </div>
      <ConnectCompany />
    </div>
  );
};

export default StoreNearMePage;
