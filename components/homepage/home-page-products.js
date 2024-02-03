
import ServiceSolutions from "../listing_swipper";

const HomePageProducts = () => {
  return (
    <div className="w-full bg-white pb-20 " id="bottom-home-section">
      <div className="  py-20   text-text layout m-auto">
        <div className="">
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

      <div className="">
      <div className="flex justify-between items-center  secondary-title lg:text-[1.5rem]  py-10 text-neutral-500 layout">
          <h1>Boats</h1>
          <div className="font-[500] text-[.9rem] hover:text-primary hover:translate-x-[-10px] duration-300 h-[30px] lg:text-[1rem] min-[2000px]:text-[1.2rem]">
            Show more
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


      <div className="">
        <div className="flex justify-between items-center  secondary-title lg:text-[1.5rem]  py-10 text-neutral-500 layout">
          <h1>Cycles</h1>
          <div className="font-[500] text-[.9rem] hover:text-primary hover:translate-x-[-10px] duration-300 h-[30px] lg:text-[1rem] min-[2000px]:text-[1.2rem]">
            Show more
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
    </div>
  );
};

export default HomePageProducts;
