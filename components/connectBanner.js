import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import register from "@/animation/joinUS.json";

const ConnectCompany = () => {
  return (
    <div className=" bg-zinc-100">
      <div className=" bg-zinc-100  layout grid md:grid-cols-2 py-20  m-auto overflow-hidden">
        <div>
          <div className="py-10 flex justify-center items-center">
            {" "}
            <div className="   text-text  m-auto">
              <h1 className="  md:text-[2.4rem]  lg:text-[45px]  min-[1900px]:text-[51px] leading-[30px] md:leading-[42px] text-text font-[500]      ">
                Join US
              </h1>
              <p className="  text-[#5f6368] my-10 paragraph min-[1900px]:text-[1.3rem] my-[1.5em]">
                Providing local rental stores with the capability to showcase
                their inventory on the system for online listings.
              </p>
            </div>
          </div>
          <button>
            <Link
              href="https://pokhara-rental-store-panel.vercel.app/register"
              className={`px-5 py-2 m-auto  md:w-[30vw]   items-center  duration-300  btn hover:text-white   transform-all flex  justify-between bg-text  border-[1px] border-secondary     rounded-md `}
            >
              {" "}
              <span className="group small">Let&apos;s collaborate</span>
              <BsArrowRightShort className="text-[1.5em]    duration-300 " />
            </Link>
          </button>
        </div>
        <div className="py-10 flex md:justify-center flex-col gap-5 md:items-center">
          <Lottie animationData={register} loop={true} />;{" "}  
        </div>
      </div>
    </div>
  );
};

export default ConnectCompany;
