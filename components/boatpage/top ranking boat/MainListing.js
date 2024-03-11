"use client";
import { RatingForEnum } from "@/lib/data";
import { getTopRated } from "@/services/rating.service";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import "swiper/css/effect-creative";
import { EffectCreative, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "../../ui/use-toast";
import { useRouter } from "next/navigation";
import Ratings from "@/components/ratings";

const MainListing = () => {
  const [boatData, setBoatData] = useState(null);
  const { push } = useRouter();
  useEffect(() => {
    async function getData() {
      try {
        const boats = await getTopRated({ ratingFor: RatingForEnum.BOAT });
        setBoatData(boats?.data);
        console.log(boats?.data)
      } catch (error) {
        console.log(error.message);
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description:
            error.response?.data?.message || "Couldn't connect to the server",
        });
      }
    }
    getData();
  }, []);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  return (
    <div className="h-[82vh]   m-auto  flex-col min-[500px]:flex-row flex gap-10 justify-between ">
      <div className="flex flex-row min-[500px]:flex-col gap-5 justify-center items-center">
        <button
          id={`prev_slide15`}
          className={`${
            isStart
              ? "border-neutral-300  text-neutral-300"
              : "btn-1 hover:text-white border-text text-text "
          } p-2   border-[1px]  rounded-full  duration-300   backdrop-blur-sm`}
        >
          <RxCaretLeft size={32} className="" />
        </button>
        <button
          id={`next_slide15`}
          className={`${
            isEnd
              ? "border-neutral-300  text-neutral-300"
              : "btn-1 hover:text-white border-text text-text  "
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
          prevEl: `#prev_slide15`,
          nextEl: `#next_slide15`,
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
        {boatData?.map((data, i) => (
          <SwiperSlide key={i} className="h-full w-full ">
            {" "}
            <div
              onClick={() => {
                push(`/boats/${data?.boat_id}`);
              }}
              className="  w-[80vw] m-auto min-[1200px]:w-full  relative h-full rounded-md overflow-hidden"
            >
              <div className="flex flex-col group items-center justify-center h-full w-full bg-red-200 relative    ">
                <Image
                  priority
                  src={data.boat_thumbnail || "/lakesideBoat.jpg"}
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
                  <div className={`w-[30px] h-[5px] ${data.bg} `}></div>
                  <div className="flex items-center justify-between">
                    <h6 className="text-[1.9rem] font-[400] text-white">
                      {data.boat_title}
                    </h6>
                   
                    <div className="flex gap-2 text-white">
                      <Ratings count={data?.averagestar} />
                     { data.count ? `(${data?.count})`: null}
                    </div>
                  </div>

                  <p className=" h-[0%] opacity-[0%] group-hover:mt-7 group-hover:mb-3 group-hover:h-[25%] group-hover:opacity-[100%] grid duration-300 text-white  text-[1rem] min-[1900px]:text-[1.3rem] ">
                    <span> {data.boat_description}</span>
                    <span className="text-[1.4rem] mt-5"> Rs {data.boat_priceInRs}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainListing;
