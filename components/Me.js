import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import autoAnimate from "@formkit/auto-animate";

const Me = () => {
  const [dev, setDev] = useState(false);
  const [elt, setElt] = useState(false);

  const parent = useRef(null);
  const parent2 = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  useEffect(() => {
    parent2.current && autoAnimate(parent2.current);
  }, [parent2]);

  return (
    <div className="">
      <div className="p-3 ">
        <Link href="/blogPosts">
          <button className="bg-gradient-to-r from-indigo-200 via-blue-100/50 to-transparent decoration-indigo-500 p-4 rounded text-center text-lg font-black underline font-serif italic flex items-center select-none">
            Go to my blogs <BsChevronRight className="h-5 w-5 ml-4" />
          </button>
        </Link>
      </div>
      <header className="p-3 transition">
        <h1 className="text-7xl font-serif">Abdulkadir Şenel</h1>

        <div className="mt-10">
          <h2 className="text-5xl font-serif italic font-bold ">I am junior</h2>
          <div
            ref={parent}
            className={`p-2 rounded mt-5 ${
              dev &&
              "bg-gradient-to-t from-blue-100 to-white"
            }`}
          >
            <button
              onClick={() => {
                setDev(!dev);
              }}
            >
              <h3 className="text-2xl font-serif underline flex items-center select-none">
                Mobile App Developer
                <BsChevronDown className="h-5 w-5 ml-4" />
              </h3>
            </button>
            {dev && (
              <p className="leading-6 tracking-tight font-serif text-lg text-left py-2">
                I am jr mobile app developer . I know <br></br> react - sanity -
                next - tailwind - expo - firebase <br></br> I made some project
                solve problems and my main perspective when developing app is
                make it simple (understable) and solving problems.these are my
                projects.
              </p>
            )}
          </div>
          <div
            ref={parent2}
            className={`p-2 rounded mt-5 ${
              elt && "bg-gradient-to-t from-green-100  to-white"
            }`}
          >
            <button
              onClick={() => {
                setElt(!elt);
              }}
            >
              <h3 className="text-2xl font-serif underline flex items-center select-none">
                English Teacher
                <BsChevronDown className="h-5 w-5 ml-4" />
              </h3>
            </button>
            {elt && (
              <p className="leading-6 tracking-tight font-serif text-lg text-left py-2">
                I am studieng Elt-Englih Language Teaching- department at İzmir
                Democracy University.
              </p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Me;
