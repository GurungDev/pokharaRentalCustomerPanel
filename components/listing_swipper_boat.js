"use client";
import Image from "next/image";
import { HashNavigation, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
 

 
export default function BoatSlider({ slides }) {
  return (
    <section  className="">
      <div className="relative mx-2 layout">
        <Swiper
          loop={true}
          preventClicks={false}
          preventClicksPropagation={false}
          navigation={{
            prevEl: `#prev_slide5`,
            nextEl: `#next_slide5`,
          }}
          modules={[Navigation, HashNavigation]}
          speed={200}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            380: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 1.2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 2,
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
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            1080: {
              slidesPerView: 2.8,
              spaceBetween: 16,
            },
            1130: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1800: {
              slidesPerView: 4.4,
              spaceBetween: 16
            },
          }}
        >
          {slides?.map((data, i) => (
            <SwiperSlide key={i} className="z-[49]">
              <div className="!flex !flex-col group !items-center shadow-md !justify-center max-w-[300px] bg-red-200 relative min-h-[350px] rounded-md overflow-hidden ">
                <Image
                  src={data.image || "/lakesideBoat.jpg"}
                  alt="Server"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full absolute group-hover:scale-110 duration-300 group-hover:brightness-[70%] "
                />
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))",
                  }}
                  className="absolute inset-0 o"
                ></div>
                <div className="absolute w-full group h-full flex flex-col justify-end   p-8   ">
                  <div className={`w-[30px] h-[5px] ${data.bg}  `}></div>
                  <h6 className="text-[1.2] md:text-[1.4] lg:text-[1.7rem] min-[1900px]:text-[1.9rem] font-[400] text-white">
                    {data?.title}
                  </h6>
                  <p className=" h-[0%] opacity-[0%] group-hover:mt-7 group-hover:mb-3 group-hover:h-[55%] group-hover:opacity-[100%] duration-300 text-white text-[.8rem] md:text-[.9rem] lg:text-[1rem] min-[1900px]:text-[1.3rem] ">
                    {data?.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button
            id={`next_slide5`}
            className="p-2 absolute right-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-gradient-to-r from-indigo-300 to-purple-400 hover:text-white  backdrop-blur-sm"
          >
            <RxCaretRight size={32} className="" />
          </button>
          <button
            id={`prev_slide5`}
            className="p-2 absolute left-[25px] z-50 top-1/2 transform -translate-y-1/2 rounded-full bg-white text-text duration-300 hover:bg-gradient-to-r from-indigo-300 to-purple-400 hover:text-white  backdrop-blur-sm"
          >
            <RxCaretLeft size={32} className="" />
          </button>
        </Swiper>
      </div>
    </section>
  );
}
