"use client";
import { nav_data_auth } from "@/lib/data";
import { resetLogin } from "@/redux/slices/userSlice";
import { getNotification, seenNotification } from "@/services/user.service";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { FaBars } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { PiCaretDownBold } from "react-icons/pi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbSailboat2 } from "react-icons/tb";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useDispatch } from "react-redux";
import { useAuth } from "./authProvider";
import { toast } from "./ui/use-toast";
 

export default function NavbarAuth() {
  const { push } = useRouter();
  const { setAuth } = useAuth();
  const [hoveringWhich, setHoveringWhich] = useState();
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const[notificationSeen, setNotificationSeen] = useState(false)
  async function seenANotification(id) {
    try {
      const notifications = await seenNotification({ data: { notificationId: id } });
      setnotificationData(notifications?.data);
      setNotificationSeen(!notificationSeen)
    } catch (error) {
      console.log(error.message);
    }
  }

  async function logout() {
    try {
      setAuth(true)
      dispatch(resetLogin());
      push("/");
      toast({
        title: "Sucessfully logged out",
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  const [notificationData, setnotificationData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const notifications = await getNotification({ data: { limit: 10 } });
        setnotificationData(notifications?.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [notificationSeen]);

  return (
    <div className="fixed   top-0 left-0 w-full py-[.5rem] bg-white     z-[993]">
      <div className=" lg:hidden py-2 text-text flex justify-between items-center m-auto w-[90%]">
        <div className=" secondary-title">
          <Image src={"/logo-black.png"} width={50} height={50} alt="" />
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
                {nav_data_auth.map((e) => {
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
          <Image
            alt="pokhara rental logo"
            src={"/logo-black.png"}
            width={45}
            height={45}
          />
        </div>
        <div className="flex justify-between gap-6">
          {nav_data_auth?.map((item, i) => (
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
                        <Image
                          src={
                            nav_data_auth[hoveringWhich[0]].subMenu?.[
                              hoveringWhich[1]
                            ].img
                          }
                          alt="image"
                          className="object-cover inset-0"
                          width={300}
                          height={200}
                        />
                        <h1 className="paragraph mt-7">
                          {
                            nav_data_auth[hoveringWhich[0]].subMenu?.[
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

          <div className="text-black group flex justify-between gap-2 items-center border-none outline-none">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>
                {" "}
                <RiAccountPinCircleFill className="text-[1.7em]" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className={
                    "py-2 px-3 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                  }
                >
                  <Menu.Item className="p-4">
                    {({ active }) => (
                      <a
                        className={`${
                          active ? "bg-primary text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        href="/account-settings"
                      >
                        Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="p-4">
                    {({ active }) => (
                      <button
                        onClick={()=>{logout()}}
                        className={`${
                          active ? "bg-primary text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                       
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item
                    disabled
                    className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm`}

                  >
                    <span className="opacity-75">Hello Nishan</span>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left ">
              <Menu.Button>
                {" "}
                <div className="relative">
                <IoIosNotifications className="text-[2em] text-[#FFBF00]" />
                <div className=" leading-0 absolute   p-0 right-0  top-0 text-[.9rem]">
                        {notificationData?.notification.length || 0}
                </div>
                </div>
               

              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className={
                    "py-2 px-3 absolute w-[20vw] right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                  }
                >
                  {notificationData?.notification.length > 0 ? (
                    notificationData?.notification?.map((item, i) => {
                      return (
                        <Menu.Item key={i} className="" as={Fragment}>
                          {({ active }) => (
                            <div
                              onClick={()=>{seenANotification(item.id)}}
                              className={`${
                                active
                                  ? "bg-primary text-white"
                                  : " text-accent"
                              } group flex w-full gap-3 group border-y-[1px] items-center justify-between rounded-md px-5 py-2 text-accent`}
                            >
                              <TbSailboat2 className="text-[2rem]" />
                              <div className="grid group items-center">
                                <h1 className="text-[.9rem] font-[400]">
                                  {" "}
                                  {item?.title}
                                </h1>
                                <h4 className="text-[.8rem] font-[300] leading-4	"> {item?.description}</h4>
                              </div>
                            </div>
                          )}
                        </Menu.Item>
                      );
                    })
                  ) : (
                    <Menu.Item className="flex items-center justify-center" as={Fragment}>
                      <div className="grid items-center justify-between p-[3rem]">
                        <Image
                          src="/notification.jpg"
                          alt="notification logo"
                          width={300}
                          height={500}
                        ></Image>
                        <p className="text-center text-accent small">
                          No Notification
                        </p>
                      </div>
                    </Menu.Item>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
