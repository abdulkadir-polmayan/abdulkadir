import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { SiExpo } from "react-icons/si";

import {
  TbBrandFirebase,
  TbBrandGmail,
  TbBrandLinkedin,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandSvelte,
  TbBrandTailwind,
} from "react-icons/tb";

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
  const [project, setProject] = useState(false);

  const [contact, setContact] = useState(false);

  const parent = useRef(null);
  const parent2 = useRef(null);
  const parent3 = useRef(null);
  const parent4 = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  useEffect(() => {
    parent2.current && autoAnimate(parent2.current);
  }, [parent2]);

  useEffect(() => {
    parent3.current && autoAnimate(parent3.current);
  }, [parent3]);
  useEffect(() => {
    parent4.current && autoAnimate(parent4.current);
  }, [parent4]);

  return (
    <div className="max-w-xl flex flex-col md:flex-row ">
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

        {/*//! ABOUT */}
        <div className="flex flex-col p-3 rounded-xl mt-10 bg-white md:items-start">
          <div className="text-2xl flex flex-col items-start   ">
            <h2 className="font-serif italic font-bold">I am junior</h2>
            <h3 className="text-3xl text-blue-500 font-sans font-bold">
              Mobile App Developer
            </h3>
          </div>
          <div className=" leading-6 tracking-tight font-serif text-xl text-left py-2">
            <div className="mb-2 ">
              <p className="">
                {" "}
                My passion is making wisely thing . Best thing is not always is
                hardest thing. Solve problem wisely .{" "}
              </p>
              <p className=" font-bold  italic">
                “Do not study hard , study smart.”
              </p>
              <div className="mt-3 flex flex-col ">
                <p className="">But there is more important thing is</p>
                <p className="md:ml-2 font-semibold italic ">
                  “being nice for people.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*//! SKİLLS */}
        <div
          ref={parent}
          className={`${
            skill ? "" : ""
          } my-8 select-none rounded-xl py-8 bg-white`}
        >
          <div
            onClick={() => {
              setSkill(!skill);
            }}
          >
            <h2
              className={` text-center text-4xl font-serif transition duration-300 font-black }`}
            >
              My skills
            </h2>
          </div>
          {skill ? (
            <div className="p-3">
              {/* <h3 className="flex items-center underline underline-offset-8 decoration-2  text-lg font-medium">
                <BiBrain className="h-10 w-10 mr-2 rounded" /> My brain (problem
                solver)
              </h3> */}
              <h3 className="flex items-center font-serif font-bold text-lg leading-5 tracking-tight">
                I know how to use this tools in order to solve problem or create
                app.
              </h3>
              <div className="  mt-5">
                <ol className="list-decimal	list-inside grid grid-rows-3 gap-x-9 grid-flow-col gap-2 ">
                  <li className="flex items-center font-semibold">
                    <TbBrandReactNative className="h-8 w-8 mr-2 rounded" />{" "}
                    React
                  </li>
                  <li className="flex items-center font-semibold">
                    <TbBrandNextjs className="h-8 w-8 mr-2 rounded" /> Next
                  </li>
                  <li className="flex items-center font-semibold">
                    <TbBrandSvelte className="h-8 w-8 mr-2 rounded" /> Sanity
                  </li>
                  <li className="flex items-center font-semibold">
                    <TbBrandFirebase className="h-8 w-8 mr-2 rounded" />{" "}
                    Firebase
                  </li>
                  <li className="flex items-center font-semibold">
                    <SiExpo className="h-6 w-8 mr-2 rounded" /> Expo
                  </li>
                  <li className="flex items-center font-semibold">
                    <TbBrandTailwind className="h-8 w-8 mr-2 rounded" />
                    Tailwind
                  </li>
                </ol>
              </div>
            </div>
          ) : null}
        </div>

        {/*//! CONTACT */}
        {/* <div ref={parent3} className="flex items-center mt-5">
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
        </div> */}
        {/*//? new  */}
        <div
          ref={parent2}
          className={`${
            skill ? "" : ""
          } my-8 select-none rounded-xl py-8 bg-white`}
        >
          <div
            onClick={() => {
              setContact(!contact);
            }}
          >
            <h2
              className={` text-4xl font-serif transition duration-300 font-black  text-center `}
            >
              Contact
            </h2>
          </div>
          {contact ? (
            <div>
              <div className="  mt-5">
                <ol className="list-decimal	list-inside grid grid-rows-3 gap-x-9 grid-flow-col gap-2 ">
                  <li className="flex items-center font-semibold">
                    <TbBrandLinkedin className="h-8 w-8 mr-2 rounded" />{" "}
                    Linkedin
                  </li>
                  <li className="flex items-center font-semibold">
                    <TbBrandNextjs className="h-8 w-8 mr-2 rounded" /> Next
                  </li>
                  <li className="flex items-center font-semibold">
                    <TbBrandGmail className="h-8 w-8 mr-2 rounded" /> Sanity
                  </li>
                  <li className="flex items-center font-semibold">
                    <TbBrandFirebase className="h-8 w-8 mr-2 rounded" />{" "}
                    Firebase
                  </li>
                  <li className="flex items-center font-semibold">
                    <SiExpo className="h-6 w-8 mr-2 rounded" /> Expo
                  </li>
                  <li className="flex items-center font-semibold">
                    <TbBrandTailwind className="h-8 w-8 mr-2 rounded" />
                    Tailwind
                  </li>
                </ol>
              </div>
            </div>
          ) : null}
        </div>

        {/*//! PROJECTS */}
        <div
          ref={parent4}
          className=" items-center flex-col justify-center py-8 my-[10%] bg-white rounded-lg  "
        >
          <h3
            onClick={() => {
              setProject(!project);
            }}
            className="p- mt- text-center text-4xl font-serif font-black"
          >
            My projects.
          </h3>
          {project ? (
            <div className="flex flex-col items-center overflow-hidden">
              <Project />
              <Project />
              <Project />
            </div>
          ) : null}
        </div>
      </header>
    </div>
  );
};

export default Me;
