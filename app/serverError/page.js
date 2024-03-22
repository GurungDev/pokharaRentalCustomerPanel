"use client";
import Lottie from "lottie-react";
import React from "react";
import server from "@/animation/server.json";
import { useRouter } from "next/navigation";

const ServerError = () => {
  const { push } = useRouter();
  return (
    <div className="pb-20 my-[20vh]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[30%] m-auto  ">
          <Lottie animationData={server} loop={true} />
        </div>
        <div className="w-[50%] text-justify m-auto">
          <h1 className=" text-center font-extrabold text-[1.5rem] mb-5">
          Technical Issues Detected
          </h1>
          <p className="text-center text-[.9rem] ">
            {" "}
            Apologies for the inconvenience, but it seems you&apos;ve encountered unexpected technical difficulties; rest assured, we&apos;re working to resolve them promptly.
          </p>
        </div>
        <div>
          {" "}
          <button
            onClick={() => {
              push("/");
            }}
            className="flex shadow-md items-center gap-2 rounded-md mt-3 text-[.9rem] font-semibold text-red-600 btn border-2 border-red-600 hover:text-white py-2 px-10 "
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
