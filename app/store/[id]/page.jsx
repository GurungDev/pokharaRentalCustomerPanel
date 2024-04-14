"use client";
import { MapContext } from "@/app/boats/[id]/page";
import MoreListingsStore from "@/components/store profile/MoreListings";
import MapComponent from "@/components/stores/mapComponent";
import { toast } from "@/components/ui/use-toast";
import { getAllBoatList } from "@/services/boat.service";
import { getAllcycleList } from "@/services/cycle.service";
import {
  followStore,
  getIsFollowed,
  getOneStore,
  unfollowStore,
} from "@/services/store.service";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdNotifications, IoMdNotificationsOff } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { useSelector } from "react-redux";
const StoreProfile = () => {
  const { loginStatus, token } = useSelector((state) => state.account);
  const { id } = useParams();
  const [storeData, setStoreData] = useState(null);
  const [storeCycleData, setstoreCycleData] = useState(null);
  const [storeBoatData, setstoreBoatData] = useState(null);
  const [isFollowedData, setisFollowedData] = useState(null);
  const [distance, setdistance] = useState(null);
  const [long, setLong] = useState(null);
  const [ltd, setLtd] = useState(null);
  const [userLat, setuserLat] = useState();
  const [userLong, setuserLong] = useState();
  const [locationPermisson, setLocationPermission] = useState(false);

  const { push } = useRouter();
  useEffect(() => {
    async function getData() {
      try {
        const storeBoats = await getAllBoatList({
          data: { storeId: id },
        });
        const store = await getOneStore(id);
        setStoreData(store?.data);
        const storeCycles = await getAllcycleList({ data: { storeId: id } });
        setstoreCycleData(storeCycles?.data[0]);

        setstoreBoatData(storeBoats?.data[0]);
        if (loginStatus == true && token != null) {
          const followingData = await getIsFollowed(id);
          setisFollowedData(followingData?.data);
        }

        setLong(store?.data?.location?.coordinates[1]);
        setLtd(store?.data?.location?.coordinates[0]);
        console.log(store);
      } catch (error) {
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

  async function followTheStore() {
    await followStore(id);
    setisFollowedData(true);
  }

  async function unFollowTheStore() {
    await unfollowStore(id);
    setisFollowedData(false);
  }

  return (
    <div className=" py-20  ">
      <div className=" layout ">
        <div className="flex  items-end justify-between">
          <div>
            <h1 className="title font-[200] py-2">{storeData?.name} </h1>
            <p className="paragraph ">
              {" "}
              The page encompasses all user details, including followed stores,
              along with a comprehensive history of past orders.{" "}
            </p>
          </div>
        </div>
        <div className="flex my-10 flex-col min-[1100px]:flex-row items-start w-full justify-between gap-[3rem]">
          <div className=" min-[1100px]:sticky min-[1100px]:top-[10vh]  grid gap-[2rem] w-[90%] min-[1100px]:w-[30%] ">
            <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Owner</span>
                  <MdOutlineMail className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small"> {storeData?.ownerName}</p>
              </div>

              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Email</span>
                  <MdOutlineMail className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small"> {storeData?.email}</p>
              </div>

              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Phone Number</span>
                  <IoPhonePortraitOutline className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small">{storeData?.phoneNumber}</p>
              </div>
              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Store Distance</span>
                  <IoPhonePortraitOutline className="group-hover:translate-x-[7px] duration-300" />
                </div>
                {distance ? (
                  <p className="small">{distance} Km</p>
                ) : (
                  <p className="small">calculate</p>
                )}
              </div>
            </div>
            <div>
              {loginStatus == true && token != null ? (
                isFollowedData ? (
                  <div
                    onClick={unFollowTheStore}
                    className="  border-[2px]  border-blue-600  duration-300 bg-primary  text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph flex items-center justify-between gap-3"
                  >
                    {" "}
                    <p>Following</p>
                    <IoMdNotifications size={25} />
                  </div>
                ) : (
                  <div
                    onClick={followTheStore}
                    className="  border-[2px] hover:border-blue-600  duration-300 hover:bg-primary hover:text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph flex items-center justify-between gap-3"
                  >
                    {" "}
                    <p>Follow the store</p>
                    <IoMdNotificationsOff size={25} />
                  </div>
                )
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="w-[90%] min-[1100px]:w-[75%] grid gap-10">
            <div className="h-[80vh] ">
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
      <MoreListingsStore
        slides={storeBoatData}
        listing={"Boats from the store."}
        listingName={"boats"}
      />

      <MoreListingsStore
        slides={storeCycleData}
        listing={"Cycles from the store."}
        listingName={"cycles"}
      />
    </div>
  );
};

export default StoreProfile;
