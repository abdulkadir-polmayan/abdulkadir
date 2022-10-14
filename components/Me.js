import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { BsChevronDown } from "react-icons/bs";
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
    <div className="over">
      <header className="p-3 transition">
        <h1 className="text-7xl font-serif">Abdulkadir Şenel</h1>

        <div className="mt-10">
          <h2 className="text-5xl font-serif italic font-bold ">I am junior</h2>
          <div
            ref={parent}
            className={`p-2 rounded mt-5 ${dev && "bg-slate-100"}`}
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
                make it simple (understable) and solving problems. these are my
                projects.
              </p>
            )}
          </div>
          <div
            ref={parent2}
            className={`p-2 rounded mt-5 ${elt && "bg-slate-100"}`}
          >
            <button
              onClick={() => {
                setElt(!elt);
              }}
            >
              <h3 className="text-2xl font-serif underline flex items-center select-none">
                Mobile App Developer
                <BsChevronDown className="h-5 w-5 ml-4" />
              </h3>
            </button>
            {elt && (
              <p className="leading-6 tracking-tight font-serif text-lg text-left py-2">
                I am jr mobile app developer . I know <br></br> react - sanity -
                next - tailwind - expo - firebase <br></br> I made some project
                solve problems and my main perspective when developing app is
                make it simple (understable) and solving problems. these are my
                projects.
              </p>
            )}
          </div>
        </div>
      </header>
      <Link href="/blogPosts">
        <button className="text-center">Go to my blogs</button>
      </Link>
    </div>
  );
};

export default Me;
