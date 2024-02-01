"use client";

import React, { useEffect, useState } from "react";
import { BsArrowUpShort, BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTopButton= () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add an event listener to check for scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle scrolling and toggle button visibility
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top z-[999] fixed bottom-10 right-0 p-1  bg-secondary text-white  rounded-l-lg  hover:scale-[1.1] duration-300 text-[2.5em] font-medium  "
          onClick={scrollToTop}
        >
          <BsArrowUpShort className="" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
