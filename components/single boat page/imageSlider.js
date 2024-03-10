"use client";
import Image from "next/image";
import { useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import "swiper/css/effect-creative";
import { EffectCreative, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MainListing = ({ imageList }) => {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  return (
    <div className="h-[60vh]   m-auto  flex-col min-[500px]:flex-row flex gap-10 justify-between ">
      <div className="flex flex-row min-[500px]:flex-col gap-5 justify-center items-center">
        <button
          id={`prev_slide1dfhvgb`}
          className={`${
            isStart
              ? "border-neutral-300  text-neutral-300"
              : "btn hover:text-white border-text text-text "
          } p-2   border-[1px]  rounded-full  duration-300   backdrop-blur-sm`}
        >
          <RxCaretLeft size={32} className="" />
        </button>
        <button
          id={`nextsldieriudgf`}
          className={`${
            isEnd
              ? "border-neutral-300  text-neutral-300"
              : "btn hover:text-white border-text text-text  "
          }  p-2  border-[1px]  rounded-full   duration-300   backdrop-blur-sm`}
        >
          <RxCaretRight size={32} className="" />
        </button>
      </div>
      <Swiper
        loop={false}
        slidesPerView={1}
        speed={600}
        navigation={{
          prevEl: `#prev_slide1dfhvgb`,
          nextEl: `#nextsldieriudgf`,
        }}
        onSlideChange={(swiper) => {
          const isEnd = swiper.isEnd;
          const isStart = swiper.isBeginning;
          if (isEnd) {
            setIsEnd(true);
          } else {
            setIsEnd(false);
          }
          if (isStart) {
            setIsStart(true);
          } else {
            setIsStart(false);
          }
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative, Navigation]}
        className="h-full w-full "
      >
        {imageList?.map((data, i) => (
          <SwiperSlide key={i} className="h-full w-full ">
            <div className="w-full h-[60vh] relative rounded-xl overflow-hidden group">
              <Image
                src={data || "/lakeSideBoat.jpg"}
                alt="Boat image"
                layout="fill"
                quality={40}
                objectFit="cover"
                className="w-full fill h-full group-hover:scale-[1.041] duration-300"
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainListing;
