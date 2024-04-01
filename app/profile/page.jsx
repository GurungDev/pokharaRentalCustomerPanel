"use client";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import noOrder from "@/animation/order.json";
import withAuth from "@/components/authMiddleware";
import Details from "@/components/profile page/detail";
import StoreCard from "@/components/profile page/store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RatingForEnum } from "@/lib/data";
import { getOrders } from "@/services/order.service";
import { getFollowedStore } from "@/services/store.service";
import { GoPlus } from "react-icons/go";
import Lottie from "lottie-react";
import { Link } from "lucide-react";
import { GiConfirmed } from "react-icons/gi";
import { FaUserEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Profile = () => {
  const state = store.getState();
  const [storeData, setStoreData] = useState(null);
  const [orderData, setorderData] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [followingShown, setfollowingShown] = useState(false);
  const [orderBy, setOrderBy] = useState("desc");
  const { push } = useRouter();
  async function getFollowedStoreList() {
    try {
      const res = await getFollowedStore();
      setStoreData(res?.data);
    } catch (error) {
      console.log(error?.message);
    }
  }

  async function getFollowedOrderList() {
    try {
      const res = await getOrders({ orderBy });
      setorderData(res?.data);
    } catch (error) {
      console.log(error?.message);
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(state?.account?.name);
      setEmail(state?.account?.email);
      setNumber(state?.account?.number);
    }
    getFollowedStoreList();
  }, [state]);

  useEffect(() => {
    getFollowedOrderList();
  }, [orderBy]);
  return (
    <div className=" py-20 layout ">
      <div className="flex  items-end justify-between">
        <div>
          <h1 className="title font-[200] py-2">Hello {name}, </h1>
          <p className="paragraph ">
            {" "}
            The page encompasses all user details, including followed stores,
            along with a comprehensive history of past orders.{" "}
          </p>
        </div>
        <div className="min-[1100px]:block hidden">
          <Select
            onValueChange={(value) => {
              setOrderBy(value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Order By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="desc">Newest</SelectItem>
                <SelectItem value="asc">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex my-10 flex-col min-[1100px]:flex-row items-start w-full justify-between gap-[3rem]">
        <div className=" min-[1100px]:sticky min-[1100px]:top-[10vh]  grid gap-[2rem] w-[90%] min-[1100px]:w-[30%] ">
          <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
            <div className="">
              <div className="group paragraph flex items-center gap-3 text-neutral-600">
                {" "}
                <span>Email</span>
                <MdOutlineMail className="group-hover:translate-x-[7px] duration-300" />
              </div>
              <p className="small"> {email}</p>
            </div>

            <div className="">
              <div className="group paragraph flex items-center gap-3 text-neutral-600">
                {" "}
                <span>Phone Number</span>
                <IoPhonePortraitOutline className="group-hover:translate-x-[7px] duration-300" />
              </div>
              <p className="small">{number}</p>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                push(`/profile/edit`);
              }}
              className="  border-[2px] hover:border-blue-600  duration-300 hover:bg-primary hover:text-white rounded-xl px-[1.5rem] py-[1rem] group paragraph flex items-center justify-between gap-3"
            >
              {" "}
              <p>Edit Profile</p>
              <FaUserEdit size={25} className=" duration-300" />
            </div>
          </div>
          <div className="px-[1.5rem] grid gap-[1rem]  w-full py-[1rem] rounded-xl border-[1px]">
            <div
              onClick={() => {
                setfollowingShown(!followingShown);
              }}
              className="flex group items-center justify-between"
            >
              <p>Following</p>
              <GoPlus
                size={30}
                className="group-hover:rotate-90 duration-300"
              />
            </div>

            <div
              className={`${
                followingShown ? "py-2  " : "py-0 h-0 "
              } duration-500 overflow-hidden grid gap-[1rem]`}
            >
              {storeData?.map((data, index) => {
                return (
                  <StoreCard
                    key={index}
                    name={data.store.name}
                    phoneNumber={data.store.phoneNumber}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[90%s] min-[1100px]:hidden">
          <Select
            onValueChange={(value) => {
              setOrderBy(value);
            }}
            className={"w-full"}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Order By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="desc">Newest</SelectItem>
                <SelectItem value="asc">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[90%] min-[1100px]:w-[75%] grid gap-10">
          {orderData && orderData.length > 0 ? (
            orderData?.map((data, index) => {
              return (
                <Details
                  key={index}
                  quantity={data?.quantity}
                  totalPriceInRs={data?.totalPriceInRs}
                  priceOfSingleProduct={data?.priceOfSingleProduct}
                  bookingDate={data?.bookingDate}
                  durationInHour={data?.durationInHour}
                  paymentType={data?.paymentType}
                  transaction_uuid={data?.transaction_uuid}
                  listingName={data?.boat?.title || data?.cycle?.title}
                  listingDescription={
                    data?.boat?.description || data?.cycle?.description
                  }
                  thumbnail={
                    data?.boat?.thumbnail || data?.cycle?.thumbnail || ""
                  }
                  ratingFor={
                    data?.boat ? RatingForEnum.BOAT : RatingForEnum.CYCLE
                  }
                  listingId={data?.boat?.id || data?.cycle?.id}
                />
              );
            })
          ) : (
            <div>
              <div className="w-[40%] m-auto text-center ">
                <Lottie animationData={noOrder} loop={true} />
                <h2 className="secondary-title ">No Orders yet!</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withAuth(Profile);
