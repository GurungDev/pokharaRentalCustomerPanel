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
import { toast } from "@/components/ui/use-toast";
import { getAllcycleList } from "@/services/cycle.service";
import { RxCross2 } from "react-icons/rx";

const CycleListing = () => {
  const [boatData, setBoatData] = useState(null);
  const [paginationData, setPaginationData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const boats = await getAllcycleList({});
        setBoatData(boats?.data[0]);
        setPaginationData(boats?.data[1]);
        
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
    console.log(boatData)
  }, []);
  return (
    <div>
      <div>
        <div className=" w-full mt-20 flex gap-5 items-center">
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="ratings">Ratings</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Order By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="price">Desc</SelectItem>
                  <SelectItem value="date">Asc</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ratings" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">
                    <Ratings count={1} />
                  </SelectItem>
                  <SelectItem value="2">
                    <Ratings count={2} />
                  </SelectItem>
                  <SelectItem value="3">
                    <Ratings count={3} />
                  </SelectItem>
                  <SelectItem value="4">
                    <Ratings count={4} />
                  </SelectItem>
                  <SelectItem value="5">
                    <Ratings count={5} />
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Input
            type="text"
            className="w-[300px]"
            placeholder="Search by Name"
          />
          <div className="small flex gap-2 text-red-400 items-center ">
            <RxCross2 className="text-[20px]" />
            <p>Clear Filters</p>
          </div>
        </div>
        <div className="pb-20 pt-10 grid   md:grid-cols-2 lg:grid-cols-3 min-[1800px]:grid-cols-4 gap-8 ">
          {boatData?.map((data, i) => (
            
            <Listing
              key={i}
              image={data?.thumbnail}
              title={data?.title}
              description={data?.description}
            />
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default CycleListing;
