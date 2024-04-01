"use client";
import React, { useState } from "react";

import {
  BsArrowDownShort,
  BsFillMouseFill,
  BsPauseFill,
  BsPlayFill,
} from "react-icons/bs";
import Link from "next/link";
import Landing_Section from "./homepage-heroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

const Slider_landing_page = () => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [swiper, setSwiper] = useState(null);
  const toggleAutoplay = () => {
    if (autoplayEnabled) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
    setAutoplayEnabled(!autoplayEnabled);
  };
  const sliderContent = [
    {
      slider_title: "Shop Owners!",
      paragraph:
        "Empower Your Business: Join Pokhara Rentals and Showcase Your Shop's Services to a Wider Audience!",
      video: "/h1.mp4",
      title: "Premier Platform for Shop Owners!",
      link: "/insight/migrateYourOldLegacyInfrastructureAndApplicationsToTheCloud",
    },
    {
      slider_title: "Exploration",
      paragraph:
        "Seamless Exploration Awaits: Dive into a World of Possibilities on Pokhara Rentals – Where Your Next Adventure Begins!",
      link: "/insight/hybridCloud",
      video: "/h2.mp4",
      title: "Your Gateway to Unforgettable Adventures!",
    },
  ];
  return (
    <div className="relative h-[100vh]">
      <Swiper
        onSwiper={(s) => setSwiper(s)}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={{
          prevEl: `#prev_slide`,
          nextEl: `#next_slide`,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
      >
        {sliderContent.map((e, index) => {
          return (
            <SwiperSlide key={e.title} className="">
              <Landing_Section
                title={e.title}
                description={e.paragraph}
                video={e.video}
                button="Learn more"
                link={e.link}
              />
            </SwiperSlide>
          );
        })}
        <div className="absolute z-[999]  bottom-40 lg:bottom-10 left-3/4  flex justify-between w-[20vw]  items-start text-opacity-[.8] text-neutral-200 ">
          <button
            onClick={toggleAutoplay}
            className="  hidden md:block  text-[1.5em]  border-white border-opacity-50 hover:border-opacity-100 rounded-md duration-300 border-[1px] p-2 text-white  "
          >
            {autoplayEnabled ? <BsPauseFill /> : <BsPlayFill />}
          </button>
          <Link
            href="#bottom-home-section"
            className="hidden md:block group opacity-50 animate-bounce-slow hover:opacity-[100]  transition-all text-[1.5em]  text-white "
          >
            <div className="animate-bounce">
              {<BsFillMouseFill className="group animate-bounce-slow" />}
              <BsArrowDownShort className="group-hover:translate-y-2 animate-bounce-slow transform transition duration-300 ease-in-out" />
            </div>
          </Link>
        </div>
      </Swiper>

    </div>
  );
};

export default Slider_landing_page;
