import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { SiExpo } from "react-icons/si";
import blogLogo from "../images/blog-logo.png";
import {
  TbBrandFirebase,
  TbBrandGithub,
  TbBrandGmail,
  TbBrandLinkedin,
  TbBrandNextjs,
  TbBrandPagekit,
  TbBrandReactNative,
  TbBrandSvelte,
  TbBrandTailwind,
  TbBrandTwitter,
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

  const [skill, setSkill] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);
  const [current, setCurrent] = useState(false);
  return (
    <div className={`max-w-xl flex flex-col md:flex-row `}>
      <header className="p-2 transition">
        <div
          className={`p-2 mb-5 flex justify-start ${
            project || skill || contact || current ? "blur-sm" : null
          }`}
        >
          <Link href="/blogPosts">
            <button className="bg-gradient-to-r  from-indigo-200 via-blue-100/50 to-transparent decoration-indigo-500 p-1 px-2 rounded text-center text-lg font-black underline font-serif italic flex items-center select-none">
              Go to my blogs <BsChevronRight className="h-5 w-5 ml-4" />
            </button>
          </Link>
        </div>
        <div
          className={`${
            project || skill || contact || current ? "blur-sm" : null
          }`}
        >
          <h1 className="text-7xl font-serif">Abdulkadir Şenel</h1>
        </div>

        {/*//! ABOUT */}
        <div
          className={`${
            project || skill || contact || current ? "blur-sm" : null
          } flex flex-col p-3 rounded-xl mt-10 bg-white md:items-start`}
        >
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
            project || contact || current ? "blur-sm " : ""
          } my-8 select-none rounded-xl py-8 bg-white`}
        >
          <div
            onClick={() => {
              if (project || contact || current) {
                setSkill(false);
              } else {
                setSkill(!skill);
              }
            }}
          >
            <h2
              className={` text-center text-4xl font-serif transition duration-300 font-black }`}
            >
              My skills
            </h2>
          </div>
          {skill && (
            <div className="p-3 mt-3">
              {/* <h3 className="flex items-center underline underline-offset-8 decoration-2  text-lg font-medium">
                <BiBrain className="h-10 w-10 mr-2 rounded" /> My brain (problem
                solver)
              </h3> */}
              <h3 className="flex items-center font-serif font-bold text-lg leading-5 tracking-tight">
                I know how to use this tools in order to solve problem or create
                app.
              </h3>
              <div className="  mt-7">
                <ol className="list-decimal	list-inside grid ml-[10%] grid-rows-3 gap-x-9 grid-flow-col gap-2 ">
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
          )}
        </div>

        {/*//! CONTACT */}
        <div
          ref={parent2}
          className={` my-8 ${
            project || skill || current ? "blur-sm" : ""
          } rounded-xl py-8 bg-white`}
        >
          <div
            onClick={() => {
              if (project || skill || current) {
                setContact(false);
              } else {
                setContact(!contact);
              }
            }}
          >
            <h2
              className={`select-none text-center text-4xl font-sans transition duration-300 font-black }`}
            >
              Contact
            </h2>
          </div>
          {contact ? (
            <div className="p-3 mt-3">
              {/* <h3 className="flex items-center underline underline-offset-8 decoration-2  text-lg font-medium">
                <BiBrain className="h-10 w-10 mr-2 rounded" /> My brain (problem
                solver)
              </h3> */}
              <h3 className=" items-center font-sans font-bold text-lg leading-6 tracking-tight">
                You can rich via this links or methods. also my mail adress:{" "}
                <a className="underline"> abdulkadirsenel63@gmail.com</a>
              </h3>
              <div className=" select-non mt-7">
                <ol className="list-decimal	list-inside grid ml-[10%] grid-rows-3 gap-x-9 grid-flow-col gap-2 ">
                  <a
                    href="https://www.linkedin.com/in/abdulkadir-senel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold"
                  >
                    <TbBrandLinkedin className="h-8 w-8 mr-2 rounded" />
                    Linkedin
                  </a>
                  <a
                    href="https://github.com/abdulkadir-polmayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold"
                  >
                    <TbBrandGithub className="h-8 w-8 mr-2 rounded" /> Github
                  </a>
                  <a
                    href="https://twitter.com/spaceofAbdul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold"
                  >
                    <TbBrandTwitter className="h-8 w-8 mr-2 rounded" /> Twitter
                  </a>

                  <a
                    href="https://read.cv/abdulkadir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold"
                  >
                    <TbBrandPagekit className="h-8 w-8 mr-2 rounded" /> read.cv
                  </a>
                </ol>
              </div>
            </div>
          ) : null}
        </div>

        {/*//! Cuurent work */}
        <div
          ref={parent3}
          className={` my-8 ${
            project || skill || contact ? "blur-sm" : ""
          } rounded-xl py-8 bg-white`}
        >
          <div
            onClick={() => {
              if (project || skill || contact) {
                setCurrent(false);
              } else {
                setCurrent(!current);
              }
            }}
          >
            <h2
              className={`select-none text-center text-4xl font-sans transition duration-300 font-black }`}
            >
              Current Work
            </h2>
          </div>
          {current ? (
            <div className="p-3 mt-3">
              {/* <h3 className="flex items-center underline underline-offset-8 decoration-2  text-lg font-medium">
                <BiBrain className="h-10 w-10 mr-2 rounded" /> My brain (problem
                solver)
              </h3> */}
              <h3 className=" items-center font-sans font-bold text-lg leading-6 tracking-tight">
                You can rich via this links or methods. also my mail adress:{" "}
                <a className="underline"> abdulkadirsenel63@gmail.com</a>
              </h3>
              <div className=" select-non mt-7">
                <ol className="list-decimal	list-inside grid ml-[10%] grid-rows-3 gap-x-9 grid-flow-col gap-2 ">
                  <a
                    href="https://www.linkedin.com/in/abdulkadir-senel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold"
                  >
                    <TbBrandLinkedin className="h-8 w-8 mr-2 rounded" />
                    Linkedin
                  </a>
                  <a
                    href="https://github.com/abdulkadir-polmayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold"
                  >
                    <TbBrandGithub className="h-8 w-8 mr-2 rounded" /> Github
                  </a>
                  <a
                    href="https://twitter.com/spaceofAbdul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold"
                  >
                    <TbBrandTwitter className="h-8 w-8 mr-2 rounded" /> Twitter
                  </a>

                  <a
                    href="https://read.cv/abdulkadir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold"
                  >
                    <TbBrandPagekit className="h-8 w-8 mr-2 rounded" /> read.cv
                  </a>
                </ol>
              </div>
            </div>
          ) : null}
        </div>

        {/*//! PROJECTS */}
        <div
          ref={parent4}
          className={`${
            skill || contact || current ? "blur-sm" : null
          } items-center flex-col justify-center -mx-2 px-[50xp] my-[10%] bg-slate-100
           rounded-lg  `}
        >
          <div
            onClick={() => {
              if (contact || skill || current) {
                setProject(false);
              } else {
                setProject(!project);
              }
            }}
            className=" py-8"
          >
            <h3 className="p- mt- text-center text-4xl font-serif font-black">
              My projects.
            </h3>
          </div>
          {project && (
            <div className="flex flex-col items-center  overflow-hidden ">
              {/* project */}
              <div className="flex flex-col shadow-lg w-[340px] m-1 max-w-sm  rounded my-10 bg-white ">
                <div className="flex justify-center p-5">
                  <div className="w-40 h-40 shadow-md bg-gradient-to-b from-white  to-yellow-100 rounded flex justify-center items-center pb-2">
                    <p className="font-serif text-9xl text-center font-black ">
                      A
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className=" font-black text-3xl mb-2">
                    Single page Blog
                  </h4>
                  <p className="px-6  tracking-tight leading-5 text-md text-black/70 text-left">
                    help people to remember the ideas of what they live for and
                    the importa of life
                  </p>
                  <p className="px-6 mt-2 font-semibold leading-5 text-black/90 text-left">
                    go to project :{" "}
                    <a className="font-medium text-black/75 " href="">
                      www
                    </a>{" "}
                  </p>
                  <p className="px-6 mt-2 font-semibold leading-5 text-black/90 text-left">
                    Github :{" "}
                    <a className="font-medium text-black/75 " href="">
                      www
                    </a>{" "}
                  </p>
                  <p className="px-6  mt-2 font-semibold leading-5 text-black/90 text-left">
                    How I did :{" "}
                    <a className="font-medium text-black/75 " href="">
                      www
                    </a>{" "}
                  </p>
                  <p className=" mx-6 my-4 font-black  text-black/70 text-left">
                    2022
                  </p>
                </div>
              </div>
              <div className="flex flex-col shadow-lg w-[340px] m-1 max-w-sm  rounded my-10 bg-white ">
                <div className="flex justify-center p-5">
                  <div className="w-40 h-40 shadow-md bg-gradient-to-t from-black  to-indigo-900 rounded flex justify-center items-center pb-2">
                    <p className="font-sans tracking-tighter font-medium text-white text-9xl text-center ">
                      M
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className=" font-black text-3xl mb-2">Motivation</h4>
                  <p className="px-6  tracking-tight leading-5 text-md text-black/70 text-left">
                    help people to inspire themself with their own imagination
                  </p>
                  <p className="px-6 mt-2 font-semibold leading-5 text-black/90 text-left">
                    go to project :{" "}
                    <a
                      className="font-medium text-black/75 "
                      href="https://motivational-saids.vercel.app/"
                    >
                      motivational-saids
                    </a>{" "}
                  </p>
                  <p className="px-6 mt-2 font-semibold leading-5 text-black/90 text-left">
                    Github :{" "}
                    <a
                      className="font-medium text-black/75 "
                      href="https://github.com/abdulkadir-polmayan/motivational-saids"
                    >
                      github.motivational-saids
                    </a>{" "}
                  </p>
                  <p className="px-6  mt-2 font-semibold leading-5 text-black/90 text-left">
                    How I did :{" "}
                    <a className="font-medium text-black/75 " href="">
                      www
                    </a>{" "}
                  </p>
                  <p className=" mx-6 my-4 font-black  text-black/70 text-left">
                    2022
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Me;
