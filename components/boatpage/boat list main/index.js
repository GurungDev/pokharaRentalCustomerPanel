"use client";

import Listing from "@/components/listing";
import Ratings from "@/components/ratings";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllBoatList } from "@/services/boat.service";
import { RxCross2 } from "react-icons/rx";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BoatListing = () => {
  const { push } = useRouter();
  const [boatData, setBoatData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [orderBy, setOrderBy] = useState(null);
  const [search, setSearch] = useState(null);
  const [paginationData, setPaginationData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const boats = await getAllBoatList({
          data: {
            page: pageNo,

            search: search || null,
            order: orderBy,
            sortBy,
          },
        });
        setBoatData(boats?.data[0]);
        setPaginationData(boats?.data[1]);
        setPageNo(boats?.data[1]?.currentPage);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description:
            error.response?.data?.message || "Couldn't connect to the server",
        });
      }
    }
    getData();
  }, [pageNo, sortBy, orderBy, search]);
  return (
    <div>
      <div>
        <div className=" w-full mt-20 flex gap-5 items-center">
          <div>
            <Select
              onValueChange={(value) => {
                setSortBy(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
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
                  <SelectItem value="desc">Desc</SelectItem>
                  <SelectItem value="asc">Asc</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Input
            type="text"
            className="w-[300px]"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search by Name"
          />
          <div
            className="small flex cursor-pointer bg-red-100 py-2 px-3 rounded-xl gap-2 text-red-400 items-center "
            onClick={() => {
              setSortBy(null);
              setOrderBy(null);
              setSearch(null);
            }}
          >
            <RxCross2 className="text-[20px]" />
            <p>Clear Filters</p>
          </div>
        </div>
        <div className="pb-20 pt-10 grid   md:grid-cols-2 lg:grid-cols-3 min-[1800px]:grid-cols-4 gap-8 ">
          {boatData?.map((data, i) => (
            <div
              onClick={() => {
                push(`/boats/${data?.id}`);
              }}
              key={i}
            >
              <Listing
                image={data?.thumbnail}
                title={data?.title}
                description={data?.description}
                rating={data?.totalstar}
                ratingCount={data?.ratingcount}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center  ">
            {" "}
            <button
              aria-label="Go to previous page"
              size="default"
              disabled={!paginationData?.hasPrevious}
              onClick={() => setPageNo(pageNo - 1)}
              className={"gap-1 pl-2.5 flex items-center  group p-3 "}
            >
              <ChevronLeft className="h-4 w-4 group-hover:translate-x-[-10px] duration-300" />
              <span></span>
            </button>
            {Array.from({ length: paginationData?.pages }, (_, index) => (
              <button
                key={index}
                onClick={() => setPageNo(index + 1)}
                className={` border px-2 py-1 mx-1 ${
                  pageNo == index + 1 ? "bg-neutral-700 text-white" : ""
                }`}
              >
                <span>{index + 1}</span>
              </button>
            ))}
            <button
              aria-label="Next"
              size="default"
              disabled={!paginationData?.hasNext}
              onClick={() => setPageNo(pageNo + 1)}
              className={"gap-1 pl-2.5 flex items-center  group"}
            >
              <span></span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-[10px] duration-300" />
            </button>
          </div>
          <div>Total Items: {paginationData?.totalItems}</div>
        </div>
      </div>
    </div>
  );
};

export default BoatListing;
