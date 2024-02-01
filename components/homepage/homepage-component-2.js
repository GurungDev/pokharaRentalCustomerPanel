import Link from 'next/link'
import React from 'react'

const HomepageComponent2 = () => {
  return (
    <div className="relative">
    {" "}
    <div
      style={{
        backgroundImage: ` linear-gradient( rgba(0,0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/lakesideBoat.jpg)`,
      }}
      className="bg-fixed trending-hidden     bg-cover bg-center "
    >
      <div className="z-[10] py-40 text-center text-neutral-100 ">
        <div className="w-[90%] min-[400px]:w-[70%] md:w-[60%] m-auto animation-container text-white text-center ">
          <h1 className="text-box text-[1.6rem] min-[400px]:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] mb-20 font-bold">
          Unlock Your Next Adventure: Seamlessly Explore, Book, and Thrive with Pokhara Rentals!
          </h1>
          <Link href="/contact">
            <button className="btn hover:px-[3em] hover:text-text rounded border-[1px] border-white py-2 px-10 hover:bg-white duration-300">
              Start the journey
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  )
}

export default HomepageComponent2