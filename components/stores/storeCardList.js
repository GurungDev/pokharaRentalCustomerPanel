import React, { useContext } from "react";
import StoreCard from "./storeCard";
import { StoreListMapContext } from "@/app/store/page";

const StoreCardList = () => {
  const { storeList, userLong, km, setuserLong, setuserLat } =
    useContext(StoreListMapContext);

  return (
    <div className="flex flex-col gap-5 overflow-y-scroll h-[60vh] py-3 px-2">
      {storeList
        ?.filter((data) => data?.distance <= km * 1000)
        ?.map((data, index) => (
          <div
            key={data?.store_id}
            onClick={() => {
              setuserLong(data?.store_location.coordinates[1]);
              setuserLat(data?.store_location.coordinates[0]);
            }}
          >
            {" "}
            <StoreCard
              id={data?.store_id}
              number={index + 1}
              name={data?.store_name}
              email={data?.store_email}
              phoneNumber={data?.store_phoneNumber}
              distance={(data?.distance / 1000).toFixed(2)}
            />
          </div>
        ))}
    </div>
  );
};

export default StoreCardList;
