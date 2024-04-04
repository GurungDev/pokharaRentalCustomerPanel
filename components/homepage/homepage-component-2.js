import Link from "next/link";
import React from "react";

const HomepageComponent2 = () => {
  return (
    <div className="relative">
      {" "}
      <div className="custom-shape-divider-top-1711985760">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div
        style={{
          backgroundImage: ` linear-gradient( rgba(0,0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/lakesideBoat.jpg)`,
        }}
        className="bg-fixed trending-hidden     bg-cover bg-center "
      >
        <div className="z-[10] py-40 text-center h-[90vh] text-neutral-100 ">
          <div className="w-[90%] min-[400px]:w-[70%] md:w-[60%] m-auto animation-container text-white text-center ">
            <h1 className="text-box text-[1.6rem] min-[400px]:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] mb-20 font-bold">
              Unlock Your Next Adventure: Seamlessly Explore, Book, and Thrive
              with Pokhara Rentals!
            </h1>
            <Link href="/store">
              <button className="btn hover:px-[3em] hover:text-text rounded border-[1px] border-white py-2 px-10 hover:bg-white duration-300">
                Start the journey
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1711985903  ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HomepageComponent2;
