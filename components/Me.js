import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { BsChevronDown } from "react-icons/bs";

const Me = () => {
  function openDev() {
    alert("cvbn");
  }
  return (
    <div>
      <header className="p-3 transition">
        <h1 className="text-7xl font-serif transition font-weight duration-300 hover:font-bold">
          Abdulkadir Şenel
        </h1>

        <div className="mt-10">
          <h2 className="text-5xl font-serif italic font-bold ">I am junior</h2>
          <h3>
            <ul className="px-5 py-3">
              <button
                className="text-xl font-serif p-3 mb-2 flex "
                onClick={openDev}
              >
                <li className="text-3xl font-serif underline">
                  Mobile app developer
                </li>
                <div className="flex p-2">
                  <BsChevronDown className=" h-5 w-5 mr-2" />
                </div>
              </button>

              <button
                className="text-xl font-serif p-3 mb-2 flex "
                onClick={openDev}
              >
                <li className="text-3xl font-serif underline">
                  English Teacher
                </li>
                <div className="flex p-2">
                  <BsChevronDown className=" h-5 w-5 mr-2" />
                </div>
              </button>
            </ul>
          </h3>
        </div>
      </header>
      <Link href="/blogPosts">
        <button className="text-center">Go to my blogs</button>
      </Link>
    </div>
  );
};

export default Me;
