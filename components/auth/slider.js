"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import {
  Keyboard,
  Pagination,
  Navigation,
  HashNavigation,
} from "swiper/modules";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import LoginComponent from "./login";
import RegisterComponent from "./register";

export default function Slider() {
  return (
    <div className="w-full min-h-[100vh]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          prevEl: `#prev_slide88`,
          nextEl: `#next_slide88`,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination, Navigation, HashNavigation]}
        className=""
      >
        <SwiperSlide className="w-[100%]  h-full  ">
          <LoginComponent />
        </SwiperSlide>
        <SwiperSlide className="w-[100%]  h-full">
          <RegisterComponent />
        </SwiperSlide>
        <button
          id={`next_slide88`}
          className="p-2 absolute group flex hover:text-secondary text-[#5f6368] items-center right-[20%] z-50 bottom-[3%] transform -translate-y-1/2  backdrop-blur-sm"
        >
          <h1 className="small hidden md:flex">Register your account. Join us !!</h1>
          <h1 className="small  md:hidden">Register !!</h1>
          <RxCaretRight size={25} className="group-hover:translate-x-[10px] duration-300" />
        </button>
        <button
          id={`prev_slide88`}
          className="p-2 absolute flex group text-[#5f6368] hover:text-secondary items-center left-[20%] z-50 bottom-[3%] transform -translate-y-1/2  backdrop-blur-sm"
        >
          {" "}
          <RxCaretLeft size={25} className="group-hover:translate-x-[-10px] duration-300" />
          <h1 className="small hidden md:flex">Already have an account. Sign up !!</h1>
          <h1 className="small  md:hidden">Sign up !!</h1>
        </button>
      </Swiper>
    </div>
  );
}
