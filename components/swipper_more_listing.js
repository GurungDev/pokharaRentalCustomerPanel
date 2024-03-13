"use client";
import Image from "next/image";
import { HashNavigation, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import Ratings from "./ratings";

export default function MoreListings({ slides }) {
  const [loop, setLoop] = useState(false);
  useEffect(() => {
    slides?.length <= 6 ? setLoop(false) : setLoop(true);
  }, [slides?.length]);
  return (
    <section id="approach" className="pt-14  bg-[#fbfbfd] ">
      <div className="flex justify-between items-center  secondary-title lg:text-[1.5rem]  py-10 text-neutral-800 layout">
        <h1>More from the same store</h1>
        <div className="font-[500] text-[.9rem] hover:text-primary hover:translate-x-[-10px] duration-300 h-[30px] lg:text-[1rem] min-[2000px]:text-[1.2rem]">
          Show more
        </div>
      </div>
      <div className="relative py-8  layout mx-2">
        <Swiper
          loop={loop}
          navigation={{
            prevEl: `#prev_slide8232`,
            nextEl: `#next_slide823232`,
          }}
          preventClicks={false}
          preventClicksPropagation={false}
          modules={[Navigation, HashNavigation]}
          speed={200}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            380: {
              slidesPerView: 1.2,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1.3,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 8,
            },
            750: {
              slidesPerView: 2.2,
              spaceBetween: 16,
            },
            976: {
              slidesPerView: 2.3,
              spaceBetween: 16,
            },
            1050: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },
            1080: {
              slidesPerView: 2.6,
              spaceBetween: 20,
            },
            1130: {
              slidesPerView: 3,
              spaceBetween: 20,
              loop: loop,
            },
            1900: {
              slidesPerView: 3,
              spaceBetween: 40,
              loop: false,
            },
          }}
        >
          {slides?.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="w-full !flex mb-8 !flex-col gap-5 group !items-center !justify-center relative min-h-[450px] rounded-xl overflow-hidden ">
                <Image
                 src={data?.image || "/lakesideBoat.jpg"}
                  alt="Server"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full absolute group-hover:scale-[1.03] duration-300 group-hover:brightness-[70%] "
                />
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
                  }}
                  className="absolute inset-0 "
                ></div>
                <div className="absolute w-full group h-full flex flex-col justify-end   p-8   ">
                  <div className={`w-[30px] h-[5px] bg-red-600`}></div>
                  <div className="flex items-center justify-between">
                    <h1 className="secondary-title  font-[600] text-white py-2">
                    {data.title}
                    </h1>
                  </div>
                  <p className="mb-2 mt-5 duration-300 text-neutral-200 text-[.9rem]   lg:text-[1rem]  min-[1900px]:text-[1.1rem] ">
                  {data.description}
                  </p>
                  <div className="flex gap-2 text-white">
                      <Ratings count={data?.totalstar} />
                     { data.ratingcount ? `(${data?.ratingcount})`: null}
                    </div>
                </div>
              </div>

          
            </SwiperSlide>
          ))}
          <button
            id={`next_slide823232`}
            className="p-2 absolute right-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-gradient-to-r from-indigo-300 to-purple-400 hover:text-white  backdrop-blur-sm"
          >
            <RxCaretRight size={32} className="" />
          </button>
          <button
            id={`prev_slide8232`}
            className="p-2 absolute left-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-gradient-to-r from-indigo-300 to-purple-400 hover:text-white  backdrop-blur-sm"
          >
            <RxCaretLeft size={32} className="" />
          </button>
        </Swiper>
      </div>
    </section>
  );
}
