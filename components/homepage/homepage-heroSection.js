 

import Link from "next/link";
 
import {  BsArrowRightShort } from "react-icons/bs";

 

const Landing_Section = ({ title, description, page,button, link, video }) => {
  return (
    <div className="relative h-[100vh] min-h-[600px] w-full m-auto   overflow-hidden">
      <video
        loop={true}
        autoPlay={true}
        muted
        id="video-bg"
        className="w-full kenburns-top-right z-[-1] absolute h-full brightness-50 object-cover absolute"
      >
        <source
          src={video}
          width="100%"
          height="100%"
          className=""
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="layout py-[7em] absolute inset-0 m-auto">
        <div className=" pb-2 border-b-[1px]">
          <p className="small text-neutral-100 ">{page}</p>
        </div>
        <div className=" h-full flex items-center mt-[2em] text-neutral-100">
          <div className="w-[70%]">
            <h1 className="title my-5 tracking-in-contract-bck ">{title}</h1>
            <p className="paragraph  font-[500]">{description}</p>
            {button ? (
              <button className="px-5 py-2 group  w-auto bg-white text-secondary duration-300  hover:bg-transparent hover:text-white hover:px-6 transform-all  text-text border-[1px] mt-10   rounded-md  ">
                <Link
                  href={link}
                  className="flex items-center  justify-between"
                >
                  <span className="group small">{button}</span>
                  <BsArrowRightShort className="text-[1.5em]  group-hover:translate-x-[10px]  duration-300 " />
                </Link>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default Landing_Section;
