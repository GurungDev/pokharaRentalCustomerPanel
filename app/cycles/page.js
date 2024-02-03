import MainListing from "@/components/MainListing";
import Listing from "@/components/listing";
import Ratings from "@/components/ratings";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { RxCross2 } from "react-icons/rx";

const CyclesPage = () => {
  return (
    <div className="py-28 layout">
      <div className="">
        <h1 className="title font-[200] py-2">Cycles</h1>
        <p className="paragraph py-10">
          Embark on adventures with hassle-free cycle rentals for a memorable
          journey on the lakeside
        </p>
      </div>
      <MainListing />
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
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
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

export default CyclesPage;
