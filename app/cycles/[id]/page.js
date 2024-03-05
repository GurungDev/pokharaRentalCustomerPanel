import ServiceBenefits from "@/components/benefit";
import Ratings from "@/components/ratings";
import MainListing from "@/components/single boat page/imageSlider";
import MoreListings from "@/components/swipper_more_listing";
import Link from "next/link";
import { GiConfirmed } from "react-icons/gi";
import { IoMdArrowBack } from "react-icons/io";
import { IoPricetagsOutline, IoStorefront } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const SingleCyclePage = () => {
  return (
    <div className="py-28 ">
      <div className="layout ">
        <Link href={"/cycles"} className="flex gap-2 items-center group">
          <IoMdArrowBack
            size={15}
            className="group-hover:translate-x-[-9px] duration-300"
          />
          <small className="text-neutral-500 small">Get back</small>
        </Link>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="title font-[200] py-2">Cycles Name</h1>
            <div className="flex gap-2">
              <Ratings count={5} />
              (45)
            </div>
          </div>
          <p className="paragraph py-10">
            Embark on adventures with hassle-free Cycle rentals for a memorable
            journey on the lakeside
          </p>
        </div>

        <div className="flex flex-col min-[1100px]:flex-row items-start w-full justify-between gap-[3rem]">
          <div className="  grid gap-[2rem] w-[90%] min-[1100px]:w-[30%] ">
            <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span> Cost Per Person</span>
                  <IoPricetagsOutline className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small"> Rs230</p>
              </div>

              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Location</span>
                  <MdOutlineLocationOn className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small"> Street no 2</p>
              </div>

              <div className="">
                <div className="group paragraph flex items-center gap-3 text-neutral-600">
                  {" "}
                  <span>Store</span>
                  <IoStorefront className="group-hover:translate-x-[7px] duration-300" />
                </div>
                <p className="small"> Sastoo pasal</p>
              </div>
            </div>
            <div className="bg-primary  btn text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph flex items-center justify-between gap-3">
              {" "}
              <span>Book Now</span>
              <GiConfirmed
                size={25}
                className="group-hover:translate-x-[7px] duration-300"
              />
            </div>
          </div>
          <div className="w-[90%] min-[1100px]:w-[75%] ">
            <MainListing
              imageList={["/lakeSideCycle.jpg", "/lakeSideCycle.jpg"]}
            />
            <ServiceBenefits
              title="Some of the highlights are: "
              benefits={[
                "Durable and fun",
                "Highly available and reliable ",
                "Cost optimisation and saving costs",
                "Safety equipment provided",
              ]}
            />
          </div>
        </div>
      </div>
      <MoreListings
        slides={[
          {
            image: "/lakesideCycle.jpg",
            title: "Cycle Name",
            bg: "bg-red-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideCycle.jpg",
            title: "Cycle Name",
            bg: "bg-blue-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideCycle.jpg",
            title: "Cycle Name",
            bg: "bg-purple-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideCycle.jpg",
            title: "Cycle Name",
            bg: "bg-pink-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideCycle.jpg",
            title: "Cycle Name",
            bg: "bg-purple-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
        ]}
      />
    </div>
  );
};

export default SingleCyclePage;
