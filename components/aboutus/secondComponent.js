"use client";
import Lottie from "lottie-react";
import React from "react";
import aboutus from "@/animation/aboutus.json";

const SecondComponent = () => {
  return (
    <div className="relative  min-[1100px]:h-[100vh]">
          <div className=" min-[1100px]:absolute min-[1100px]:w-[500px] min-[1100px]:z-[5] h-full min-[1200px]:left-[60%] flex items-start flex-start min-[1100px]:pt-36 text-[1.6rem] min-[400px]:text-[1.8rem] min-[1100px]:text-[2rem] lg:text-[2rem]  leading-[4rem]    font-[500] ">
        “ Ensuring seamless, transparent, and reliable rental experiences for
        boating and cycling enthusiasts.”
      </div>
      <div className="min-[1100px]:absolute min-[1100px]:z-[-1]  inset-0  m-auto min-[1100px]:h-[100vh]">
        <Lottie
          animationData={aboutus}
          className="h-full w-full "
          loop={true}
        />
      </div>
    
    </div>
  );
};

export default SecondComponent;
