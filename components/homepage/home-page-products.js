import React from "react";
import ServiceSolutions from "../listing_swipper";

const HomePageProducts = () => {
  return (
    <div className="w-full bg-white">
      <div className="  py-20   text-text w-[90%] md:w-[90%] m-auto">
        <div className=" w-[70%] md:w-[60%]">
          <small className="secondary-title lg:text-[1.5rem]  text-neutral-500">
            FEATURED LISTING
          </small>
          <h1 className="secondary-title  my-5 mt-[3rem]">
            Pokhara Rentals helps transform business online
          </h1>
          <p className="paragraph mb-2  text-[#5f6368]">
            We thrive to work closely with our clients, cater their requirements
            thoroughly, successfully drive their business with digital
            technology, combined with highly experienced knowledge and
            expertise.
          </p>
        </div>
      </div>
      <ServiceSolutions
        slides={[
          {
            image: "/lakesideBoat.jpg",
            title: "Boat",
            bg: "bg-red-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideBoat.jpg",
            title: "Boat",
            bg: "bg-blue-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideBoat.jpg",
            title: "Boat",
            bg: "bg-purple-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
          {
            image: "/lakesideBoat.jpg",
            title: "Boat",
            bg: "bg-red-400",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod, tenetur aut ipsa ea sit laboriosam sint optio amet delectus eligendi distinctio tempore ratione isteat quas  ",
          },
        ]}
      />
    </div>
  );
};

export default HomePageProducts;
