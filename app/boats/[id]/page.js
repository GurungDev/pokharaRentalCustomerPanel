import Ratings from "@/components/ratings";
import MainListing from "@/components/single boat page/imageSlider";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import ServiceBenefits from "@/components/benefit";
import MoreListings from "@/components/swipper_more_listing";

const SingleBoatPage = () => {
  return (
    <div className="py-28 ">
      <div className="layout ">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="title font-[200] py-2">Boats Name</h1>
            <div className="flex gap-2">
              <Ratings count={5} />
              (45)
            </div>
          </div>
          <p className="paragraph py-10">
            Embark on adventures with hassle-free boat rentals for a memorable
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
          <div className="w-90% min-[1100px]:w-[75%] h-[80vh] overflow-scroll">
            <MainListing
              imageList={["/lakeSideBoat.jpg", "/lakeSideBoat.jpg"]}
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
            image: "/lakesideBoat.jpg",
            title: "Boat Name",
            bg: "bg-red-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideBoat.jpg",
            title: "Boat Name",
            bg: "bg-blue-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideBoat.jpg",
            title: "Boat Name",
            bg: "bg-purple-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideBoat.jpg",
            title: "Boat Name",
            bg: "bg-pink-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideBoat.jpg",
            title: "Boat Name",
            bg: "bg-purple-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
        ]}
      />
    </div>
  );
};

export default SingleBoatPage;
