"use client";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMail, MdStore } from "react-icons/md";

import Details from "@/components/profile page/detail";
import { GoPlus } from "react-icons/go";
import { usePDF } from "react-to-pdf";
import { IoMdNotifications, IoMdNotificationsOff } from "react-icons/io";
import StoreCard from "@/components/profile page/store";
 
const Profile = () => {
  const state = store.getState();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [followingShown, setfollowingShown] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(state?.account?.name);
      setEmail(state?.account?.email);
      setNumber(state?.account?.number);
    }
  }, [state]);
  return (
    <div className=" py-20 layout ">
      <div>
        <h1 className="title font-[200] py-2">Hello {name}, </h1>
        <p className="paragraph ">
          {" "}
          The page encompasses all user details, including followed stores,
          along with a comprehensive history of past orders.{" "}
        </p>
      </div>
      <div className="flex my-10 flex-col min-[1100px]:flex-row items-start w-full justify-between gap-[3rem]">
        <div className=" min-[1100px]:sticky min-[1100px]:top-[10vh]  grid gap-[2rem] w-[90%] min-[1100px]:w-[30%] ">
          <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
            <div className="">
              <div className="group paragraph flex items-center gap-3 text-neutral-600">
                {" "}
                <span>Email</span>
                <MdOutlineMail className="group-hover:translate-x-[7px] duration-300" />
              </div>
              <p className="small"> {email}</p>
            </div>

            <div className="">
              <div className="group paragraph flex items-center gap-3 text-neutral-600">
                {" "}
                <span>Phone Number</span>
                <IoPhonePortraitOutline className="group-hover:translate-x-[7px] duration-300" />
              </div>
              <p className="small">{number}</p>
            </div>
          </div>

          {/* <div>
            <Link
              href={`/boats/$}/rent`}
              className="bg-primary border-[2px] border-[#3586ff] hover:border-[#FE2A2A] btn text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph flex items-center justify-between gap-3"
            >
              {" "}
              <span>Edit Profile</span>
              <GiConfirmed
                size={25}
                className="group-hover:rotate-180 duration-300"
              />
            </Link>
          </div> */}
          <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
            <div
              onClick={() => {
                setfollowingShown(!followingShown);
              }}
              className="flex group items-center justify-between"
            >
              <p>Following</p>
              <GoPlus
                size={30}
                className="group-hover:rotate-90 duration-300"
              />
            </div>

            <div
              className={`${
                followingShown ? "py-2  " : "py-0 h-0 "
              } duration-500 overflow-hidden grid gap-[1rem]`}
            >
              <StoreCard />
              <StoreCard />
            </div>
          </div>
        </div>
        <div className="w-[90%] min-[1100px]:w-[75%] grid gap-7">
          <Details />

          <Details />
          <Details />
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Profile;
