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
    <div className="md:p-20 flex flex-col md:flex-row">
      {/* <div className="w-40 h-40 m-5 md:mt-[120px] bg-black">
        <img></img>
      </div> */}

      <header ref={parent} className="p-3 transition">
        <div className="p-3 mb-5 flex justify-end">
          <Link href="/blogPosts">
            <button className="bg-gradient-to-r  from-indigo-200 via-blue-100/50 to-transparent decoration-indigo-500 p-4 rounded text-center text-lg font-black underline font-serif italic flex items-center select-none">
              Go to my blogs <BsChevronRight className="h-5 w-5 ml-4" />
            </button>
          </Link>
        </div>
        <h1 className="text-7xl font-serif">Abdulkadir Şenel</h1>

        <div className="mt-10 ">
          <h2 className="text-5xl font-serif italic font-bold flex-initial ">
            I am junior
          </h2>
          <h3 className="text-2xl font-serif underline mt-4">
            Mobile App Developer
          </h3>
          <p className="leading-6 tracking-tight font-serif text-xl text-left py-2">
            I am jr mobile app developer . <br></br> I know {"  "}
            <a
              className="underline decoration-blue-500 font-bold"
              href="https://www.instapaper.com/u"
            >
              react
            </a>{"-"}
            {"  "}
            <a
              className="underline font-bold"
              href="https://www.instapaper.com/u"
            >
              next.js
            </a>{"-"}
            {"  "}
            <a
              className="underline decoration-orange-500 font-bold"
              href="https://www.instapaper.com/u"
            >
              sanity
            </a>{" "}
            {"-"}
            <a
              className="underline decoration-indigo-500 font-bold"
              href="https://www.instapaper.com/u"
            >
              tailwind
            </a>{" "}
            {"-"}
            <a
              className="underline font-bold"
              href="https://www.instapaper.com/u"
            >
              expo
            </a>{" "}
            
            <br></br> I made some project
            solve problems and my main perspective when developing app is make
            it simple (understable) and solving problems.these are my projects.
          </p>
          {/* <div
            className={`p-2 rounded mt-5 flex-initial ${dev && "bg-slate-100"}`}
          >
            <button
              onClick={() => {
                setDev(!dev);
              }}
            >
              <h3
                className={`text-2xl font-serif underline flex items-center select-none ${
                  dev && "decoration-blue-500/50 "
                } `}
              >
                Mobile App Developer
                <BsChevronDown className="h-5 w-5 ml-4" />
              </h3>
            </button>
          </div>
        </div>
        {dev && (
          <p className="leading-6 tracking-tight font-serif text-lg text-left py-2">
            I am jr mobile app developer . I know <br></br> react - sanity -
            next - tailwind - expo - firebase <br></br> I made some project
            solve problems and my main perspective when developing app is make
            it simple (understable) and solving problems.these are my projects.
          </p>
        )}
        {/* <div
            ref={parent2}
            className={`p-2 rounded mt-5 ${elt && "bg-slate-100"}`}
          >
            <button
              onClick={() => {
                setElt(!elt);
              }}
            >
              <h3
                className={`text-2xl font-serif underline flex items-center select-none ${
                  elt && "decoration-green-500/50 "
                } `}
              >
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
           */}
        </div>
      </header>
    </div>
  );
};

export default Me;
