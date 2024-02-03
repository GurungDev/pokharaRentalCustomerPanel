"use client";
import { useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Collapsible from "react-collapsible";

import { FaBars } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

export default function Navbar() {
  const nav_data = [
    {
      id: "home",
      title: "Home",
      url: "/",
      hasSubMenu: false,
    },
    {
      id: "Stores",
      title: "Listings",
      img_url: "/storeNearMe",
      img_title: "Find listings Near you !!",
      img_desc:
        "We can find the nearest rental store available near you using our GPS.",
      url: "#",
      hasSubMenu: true,
      subMenu: [
        {
          bg: "linear-gradient(90deg, rgba(40,198,235,1) 21%, rgba(3,4,6,0.9220938375350141) 100%)",
          id: "Boats",
          title: "Boats",
          header: "Rent a boat from us and set sail on your next adventure, creating memories that will last a lifetime.",
          img: "/boat.png",
          url: "/boats",
        },
        {
          id: "Cycles",
          bg: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(36,82,136,0.8632703081232493) 100%)",
          title: "Cycles",
          header: "Explore your surroundings at your own pace with our reliable cycle rental services.",
          img: "/cycle.png",
          url: "/cycles",
        },
      ],
    },
    {
      id: "Store near me",
      title: "Store Near Me",
      url: "/storeNearMe",
      hasSubMenu: false,
    },
    {
      id: "who-we-are",
      title: "About Us",
      url: "/aboutUs",
      hasSubMenu: false,
    },
    {
      id: "Login",
      title: "Login",
      url: "/login",
      hasSubMenu: false,
    },
    {
      id: "Contact",
      title: "Contact Us",
      url: "/contact",
      hasSubMenu: false,
    },
  ];
  const [isHover, setIsHover] = useState(false);
  const [hoveringWhich, setHoveringWhich] = useState();
  const [clicked, setClicked] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed   top-0 left-0 w-full py-[.5rem] bg-white     z-[993]">
      <div className=" lg:hidden py-2 text-text flex justify-between items-center m-auto w-[90%]">
        <div className=" secondary-title">
          <Image src={"/logo-black.png"} width={50} height={50} />
        </div>
        <div>
          <button onClick={toggleDrawer}>
            <FaBars className="text-[1.5rem]  " />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className=" w-[70vw]"
            size={300}
          >
            <div className=" overflow-scroll h-[100vh] text-black py-2 px-2">
              <div className="  w-full h-[50x] p-4 flex flex-end justify-end">
                <button onClick={toggleDrawer} className=" ">
                  <RxCross2 className="text-[1.5rem] " />
                </button>
              </div>
              <div className="w-[90%] grid gap-4 mt-8 m-auto overflow-scroll">
                {nav_data.map((e) => {
                  if (e.hasSubMenu) {
                    return (
                      <Collapsible
                        trigger={` ${e?.title} `}
                        className="transition-all hover:text-[1.1rem]  expanding-line border-b-2  py-3 px-4 rounded hover:text-[#BF40BF]  text-text paragraph hover:bg-white "
                        key={e.id}
                      >
                        <div className="border-y-2  my-3 overflow-scroll bg-zinc-100   py-2 max-w-md  w-full   flex flex-col gap-2 justify-center">
                          {e.subMenu?.map((subItem) => (
                            <Link
                              href={subItem.url}
                              onClick={toggleDrawer}
                              className="text-text    group py-3 px-4 rounded paragraph hover:bg-white hover:text-[#BF40BF]   block"
                              key={subItem.id}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </Collapsible>
                    );
                  } else {
                    return (
                      <Link
                        href={e.url}
                        onClick={toggleDrawer}
                        className=" border-b-2 hover:text-[1.1rem]  py-3 px-4 rounded hover:bg-white hover:text-[#BF40BF]  paragraph duration-300   cursor-pointer      text-text"
                        key={e.id}
                      >
                        {e.title}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
      <div className="hidden lg:flex layout   text-text  m-auto   items-stretch justify-between">
        <div className=" secondary-title">
          {" "}
          <Image src={"/logo-black.png"} width={45} height={45} />
        </div>
        <div className="flex justify-between gap-6">
          {nav_data.map((item, i) => (
            <div
              className="group flex justify-between items-center "
              key={item.id}
            >
              <div className="group transition-all text-[.95rem] duration-300 ease-in-out cursor-pointer flex items-center gap-0">
                {item?.url ? (
                  <Link
                    href={item.url}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        setClicked(false);
                      }, 300);
                    }}
                    onClick={() => {
                      setClicked(true);

                      setIsHover(false);
                      setHoveringWhich(undefined);
                    }}
                    className="expanding-line hover:font-[600]  font-[500] py-1 px-1 block"
                  >
                    {item?.title}
                  </Link>
                ) : (
                  <span className="expanding-line hover:font-[600] font-[500]  py-1 px-1">
                    {item?.title}
                  </span>
                )}
                {item?.hasSubMenu ? (
                  <PiCaretDownBold className="group-hover:rotate-180 transition-all ease-in-out duration-300" />
                ) : null}
              </div>

              {item?.hasSubMenu ? (
                <div
                  className={`${
                    clicked ? "group-hover:h-[0vh]" : "group-hover:h-[35vh]"
                  } absolute flex top-[65px]  left-0 bg-white  h-0 w-full transition-all ease-in-out duration-500 overflow-hidden shadow-2xl shadow-black/20`}
                >
                  <div className="flex gap-2 layout mx-auto justify-between overflow-hidden">
                    <div className="max-w-md layout flex  flex-col gap-2 justify-center">
                      {item.subMenu?.map((subItem, j) => (
                        <Link
                          href={subItem.url}
                          className="text-text block animate_container"
                          key={subItem.id}
                          id="link"
                        >
                          <div
                            className={`cursor-pointer max-w-md w-full flex  hover:bg-white  hover:text-[#BF40BF]  items-center justify-between py-2 text-[1.1rem] hover:text-[1.2rem] px-6 transition-all duration-300  peer`}
                            onMouseEnter={() => {
                              setIsHover(true);
                              setHoveringWhich([i, j]);
                            }}
                            onClick={() => {
                              setClicked(true);
                              setTimeout(() => {
                                setClicked(false);
                              }, 500);
                              setIsHover(false);
                              setHoveringWhich(undefined);
                            }}
                            onMouseLeave={() => {
                              setIsHover(false);
                              setHoveringWhich(undefined);
                            }}
                          >
                            {subItem?.title}
                          </div>
                        </Link>
                      ))}
                    </div>

                    {hoveringWhich ? (
                      <div
                        className={`text-text grid grid-cols-2 items-center justify-between bg-white py-5 font-[300] h-[70%] layout my-auto`}
                      >
                        <Image src= {nav_data[hoveringWhich[0]].subMenu?.[
                              hoveringWhich[1]
                            ].img} alt="image" className="object-cover inset-0" width={300} height={200}/>
                        <h1 className="paragraph mt-7">
                          {
                            nav_data[hoveringWhich[0]].subMenu?.[
                              hoveringWhich[1]
                            ].header
                          }
                        </h1>
                      </div>
                      
                    ) : (
                      <div
                        className={`text-text  
                    } rounded-md px-3 bg-white py-5  h-[70%] w-[60%] my-auto`}
                      >
                        <h1 className="text-[.9rem] lg:text-[1.4rem] min-[1900px]:text-[1.8rem] font-[400]">
                          {" "}
                          {item?.img_title}
                        </h1>
                        <p className="paragraph mt-7 mb-14 font-[300]">
                          {" "}
                          {item?.img_desc}
                        </p>
                        <Link href={item?.img_url || ""}>
                          {" "}
                          <button
                            onClick={() => {
                              setClicked(true);
                              setTimeout(() => {
                                setClicked(false);
                              }, 300);
                            }}
                            className="text-secondary bg-white w-[100px] small border-[1px] border-text rounded   hover:text-white btn    px-3 py-2 "
                          >
                            Find more
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
