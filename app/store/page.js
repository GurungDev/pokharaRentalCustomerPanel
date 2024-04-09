"use client";
import MapComponent from "@/components/store list/mapComponent";
import ConnectCompany from "../../components/connectBanner";
import StoreList from "../../components/stores/storeList";
import location from "@/animation/location.json";
import Lottie from "lottie-react";
import React, { createContext, useEffect, useState } from "react";
import { getAllStoreList } from "@/services/store.service";
import { toast } from "@/components/ui/use-toast";
import { title } from "process";
export const StoreListMapContext = createContext();
const StoreNearMePage = () => {
  const [distance, setdistance] = useState(null);
  const [locationPermisson, setLocationPermission] = useState(false);
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
              setLocationPermission(true);
              resolve();
            },
            (error) => {
              toast({
                variant: "destructive",
                title:
                  "Location permissions not granted. Please enable location services.",
              });
            }
          );
        } else {
          toast({
            variant: "destructive",
            title: "Geolocation is not supported by this browser.",
          });
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

  return locationPermisson ? (
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
            locationPermisson,
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
  ) : (
    <div>
      <div>
        <div className="py-14 layout">
          {" "}
          <div className="w-[70%]">
            <h1 className="secondary-title  my-5 mt-[2rem]">
              Location Permission Required
            </h1>
            <p className="paragraph mb-2  text-[#5f6368]">
              To discover nearby stores, please enable location permissions on
              your device. This will allow us to provide you with tailored
              shopping experiences and convenient access to nearby retailers.
            </p>
          </div>
          <div className="w-[30%] m-auto">
            <Lottie animationData={location} loop={true} />{" "}
          </div>
        </div>
        <ConnectCompany />
      </div>
    </div>
  );
};

export default StoreNearMePage;
