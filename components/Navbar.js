import React from 'react'
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="p-0 fixed top-0 z-30 w-full">
        <div className="lg:mx-56 shadow-md flex justify-between  p-3 backdrop-blur-sm bg-white/60 rounded sticky top-0	">
          <h2 className="flex  left-0 flex-1 font-roboto   items-center">
            <BsChevronLeft className="h-5 w-5 mr-2" />
            <Link href="/">back home</Link>
          </h2>
          <h1 className="font-bold text-2xl text-center flex-1">BLOGS</h1>
          <div className="flex-1  text-center items-center grid justify-items-end">
            <button className=" px-2 py-1 rounded backdrop-blur-sm bg-sky-300/40">
              How I did
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
