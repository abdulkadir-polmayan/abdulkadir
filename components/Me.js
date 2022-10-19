import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { DiReact } from "react-icons/di";

import {
  AiFillLinkedin,
  AiFillMail,
  AiFillMessage,
  AiFillTwitterSquare,
} from "react-icons/ai";

import Image from "next/image";

import autoAnimate from "@formkit/auto-animate";
import Project from "./Project";

const Me = () => {
  const [skill, setSkill] = useState(false);
  const [elt, setElt] = useState(false);

  const [contact, setContact] = useState(false);

  const parent = useRef(null);
  const parent2 = useRef(null);
  const parent3 = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  useEffect(() => {
    parent2.current && autoAnimate(parent2.current);
  }, [parent2]);

  useEffect(() => {
    parent3.current && autoAnimate(parent3.current);
  }, [parent3]);

  return (
    <div className="max-w-2xl flex flex-col md:flex-row ">
      <header className="p-2 transition">
        <div className="p-2 mb-5 flex justify-start">
          <Link href="/blogPosts">
            <button className="bg-gradient-to-r  from-indigo-200 via-blue-100/50 to-transparent decoration-indigo-500 p-1 px-2 rounded text-center text-lg font-black underline font-serif italic flex items-center select-none">
              Go to my blogs <BsChevronRight className="h-5 w-5 ml-4" />
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-7xl font-serif">Abdulkadir Şenel</h1>
        </div>

        <div className="flex flex-col p-2 rounded-xl mt-10 bg-white md:items-start">
          <div className="text-2xl flex flex-col items-start md:flex-row   ">
            <h2 className="font-serif italic font-bold">I am junior</h2>
            <h3 className="text-3xl md:ml-3 text-blue-500 font-sans font-bold">
              Mobile App Developer
            </h3>
          </div>
          <div className="leading-6 tracking-tight font-serif text-xl text-left py-2">
            <div className="mb-2 ">
              <p className="">
                {" "}
                My passion is making wisely thing . Best thing is not always is
                hardest thing. Solve problem wisely .{" "}
              </p>
              <p className=" font-semibold">Do not study hard , study smart.</p>
              <div className="mt-3 flex flex-col md:flex-row">
                <p>But there is more important thing is</p>
                <p className="md:ml-2 font-semibold italic">
                  “being nice for people.”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={parent}
          onClick={() => {
            setSkill(!skill);
          }}
          className={`${skill ? "" : ""} my-8 select-none rounded-xl p-2`}
        >
          <div>
            <h2>My skills</h2>
          </div>
          {skill ? (
            <div>
              <h3 className="flex items-center justify-center">
                <BiBrain className="h-10 w-10 mr-2 rounded" /> My brain (problem
                solver)
              </h3>
              <div className="flex justify-between p-3">
                <ol className="list-decimal	list-inside">
                  <li className="flex items-center">
                    <DiReact className="h-10 w-10 mr-2 rounded" /> React(just
                    tool)
                  </li>
                  <li className="flex items-center">
                    <DiReact className="h-10 w-10 mr-2 rounded" /> React(just
                    tool)
                  </li>
                  <li className="flex items-center">
                    <DiReact className="h-10 w-10 mr-2 rounded" /> React(just
                    tool)
                  </li>
                </ol>
                <ol className="list-decimal	list-inside">
                  <li className="flex items-center">
                    <DiReact className="h-10 w-10 mr-2 rounded" /> React(just
                    tool)
                  </li>
                  <li className="flex items-center">
                    <DiReact className="h-10 w-10 mr-2 rounded" /> React(just
                    tool)
                  </li>
                  <li className="flex items-center">
                    <DiReact className="h-10 w-10 mr-2 rounded" /> React(just
                    tool)
                  </li>
                </ol>
              </div>
            </div>
          ) : null}
        </div>
        <div
          ref={parent2}
          onClick={() => {
            setContact(!contact);
          }}
          className={`${skill ? "" : ""} my-8 select-none rounded-xl p-2`}
        >
          <div>
            <h2>My skills</h2>
          </div>
          {contact ? (
            <div>
              <h3 className="flex items-center justify-center">
                <BiBrain className="h-10 w-10 mr-2 rounded" /> My brain (problem
                solver)
              </h3>
            </div>
          ) : null}
        </div>

        <div ref={parent3} className="flex items-center mt-5">
          {" "}
          <button
            onClick={() => {
              setContact(!contact);
            }}
            className="bg-gradient-to-r  from-slate-200 via-blue-100/50 to-transparent p-2 rounded text-center text-xl font-black  font-serif italic flex items-center select-none"
          >
            {" "}
            contact
          </button>{" "}
          {contact && (
            <div className="ml-4 text-lg font-semibold  flex">
              <a href="https://www.linkedin.com/in/abdulkadir-senel/">
                <AiFillLinkedin className="h-8 w-8 ml-2 rounded" />
              </a>
              <a href="https://twitter.com/spaceofAbdul">
                <AiFillTwitterSquare className="h-8 w-8 ml-2 rounded" />
              </a>
              <a href="mailto:abdulkadirsenel63@gmai.com">
                <AiFillMail className="h-8 w-8 ml-2 rounded" />
              </a>
            </div>
          )}{" "}
          <div className="ml-2"> &gt; </div>
        </div>
        <div className=" items-center flex-col justify-center mt-[10%]   ">
          <h3 className="p-4 mt-4 text-4xl font-serif font-black">
            My projects.
          </h3>
          <div className="flex flex-col items-center overflow-hidden">
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Me;
