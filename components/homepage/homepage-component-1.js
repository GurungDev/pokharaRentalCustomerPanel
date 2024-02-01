import React from 'react'

import Link from "next/link";
import { AiOutlineCloud } from "react-icons/ai";
import { BsArrowRightShort, BsFillDeviceHddFill } from "react-icons/bs";
import {
  MdOutlineAppSettingsAlt,
  MdOutlineDesignServices,
  MdOutlineSettingsApplications,
  MdSecurity,
} from "react-icons/md";
import { SiJfrogpipelines } from "react-icons/si";


const HomepageSection = () => {
    const service_list = [
        {
          id: "Global Visibility",
          icon: () => {
            return (
              <AiOutlineCloud className="group-hover:-translate-y-[6px] group-hover:text-red-600 text-[1.4rem] duration-200" />
            );
          },
          title: "Global Visibility",
         
        },
        {
          id: "Effortless Management",
          icon: () => {
            return (
              <MdSecurity className="group-hover:-translate-y-[6px] group-hover:text-red-600 text-[1.4rem] duration-200" />
            );
          },
          title: "Effortless Management",
           
        },
        {
          id: "Customer Reviews and Trust",
          icon: () => {
            return (
              <MdOutlineAppSettingsAlt className="group-hover:-translate-y-[6px] group-hover:text-red-600 text-[1.4rem] duration-200" />
            );
          },
          title: "Customer Reviews and Trust",
         
        },
        {
          id: "24/7 Accessibility",
          icon: () => {
            return (
              <MdOutlineSettingsApplications className="group-hover:-translate-y-[6px] group-hover:text-red-600 text-[1.4rem] duration-200" />
            );
          },
          title: "24/7 Accessibility",
          
        },
        {
          id: "Marketing Support",
          icon: () => {
            return (
              <SiJfrogpipelines className="group-hover:-translate-y-[6px] group-hover:text-red-600 text-[1.4rem] duration-200" />
            );
          },
          title: "Marketing Support",
        
        },
        {
          id: "Secure Transactions",
          icon: () => {
            return (
              <MdOutlineDesignServices className="group-hover:-translate-y-[6px] group-hover:text-red-600 text-[1.4rem] duration-200" />
            );
          },
          title: "Secure Transactions",
        
        },
        {
          id: "Adaptable to Shop Needs",
          icon: () => {
            return (
              <BsFillDeviceHddFill className="group-hover:-translate-y-[6px] group-hover:text-red-600 text-[1.4rem] duration-200" />
            );
          },
          title: "Adaptable to Shop Needs",
        
        },
      ];
  return (
    <div
    id="bottom-home-section"
    className="bg-[#fbfbfd] md:py-24 py-14 lg:py-32  "
  >
    <div className=" animation-container text-text text-center w-[70%] md:w-[80%] lg:w-[70%] min-[1900px]:w-[60%] m-auto">
      <h1 className="text-box text-[1.6rem] min-[400px]:text-[2rem] md:text-[2.3rem] lg:text-[2.7rem] min-[1900px]:text-[ 50px] font-bold">
      Boost Your Business with Pokhara Rentals: Unleash the Potential of Your Boat and Cycle Rental Services!
      </h1>
      <p className=" text-[#5f6368] my-10 text-[.9rem] min-[400px]:text-[1rem] lg:text-[1.2rem] min-[1900px]:text-[1.3rem] my-[3em]">
      Joining Pokhara Rentals opens up a world of opportunities for your boat and cycle rental business. Our platform is designed to empower your enterprise by connecting you with a vast audience seeking memorable experiences. Showcase your unique offerings to a global customer base, effortlessly manage bookings, and watch your business thrive. Dont miss out on the chance to elevate your presence and increase revenue partner with Pokhara Rentals and let your services shine in the expansive landscape of adventure and exploration!
      </p>{" "}
      <Link href="/service/cloud" className="">
        <button
          className={` px-5 py-2 m-auto  group items-center duration-300  btn hover:text-text  bg-secondary hover:px-6 transform-all flex  w-auto justify-between  text-white border-[1px] border-text mt-[4em]   rounded-md  `}
        >
          <span className="group small"> Get in touch</span>
          <BsArrowRightShort className="text-[1.5em]  group-hover:translate-x-[10px]  duration-300 " />
        </button>{" "}
      </Link>
    </div>
    <div className="w-[90%] m-auto flex items-center gap-10  mt-[8em]">
      <div className="flex flex-col md:flex-row flex-wrap gap-5   justify-start md:justify-between flex-start items-center w-full">
        {" "}
        {service_list.map((i) => {
          return (
            <div
              key={i.id}
         
              className=" flex flex-col hover:border-red-600 border-b-[2px] duration-300 gap-3 items-center text-text  group     "
            >
              {i?.icon()}
              <div className="font-[500] text-[.9rem] group-hover:text-red-600 duration-300 h-[30px] lg:text-[1rem] min-[2000px]:text-[1.2rem]">
                {i.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
    
  )
}

export default HomepageSection