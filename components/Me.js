import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { SiExpo } from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandNextjs,
  TbBrandPagekit,
  TbBrandReactNative,
  TbBrandSvelte,
  TbBrandTailwind,
  TbBrandTwitter,
} from "react-icons/tb";
import { AiFillCaretRight } from "react-icons/ai";
import me from "../images/me.png";
import Image from "next/image";
import autoAnimate from "@formkit/auto-animate";

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

  const colors = ["red", "cyan", "purple"];

  const [skill, setSkill] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);
  const [current, setCurrent] = useState(false);
  return (
    <div className={`max-w-xl flex flex-col md:flex-row `}>
      <header className="p-2 transition overflow-hidden">
        {/* <div className={`p-10   text-green-900`}>
          <h1 className="text-5xl font-bold">Dmeo</h1>
          <p className="">This demo for how is going to see</p>
        </div> */}
        <div
          className={`px-2 mb-10  flex justify-between items-center ${
            project || skill || contact || current ? "blur-sm" : null
          }`}
        >
          <div>
            <Image
              src={me}
              alt="Picture of the author"
              width={100}
              height={100}
              className=" rounded-full"
            />
          </div>
          <div>
            <Link href="/blogPosts">
              <button className=" bg-green-900 text-green-200 p-2 px-2  rounded text-center text-xl font-bold flex items-center select-none tracking-normal">
                Visit my Blog <BsChevronRight className="h-5 w-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`${
            project || skill || contact || current ? "blur-sm" : null
          } p-3`}
        >
          {" "}
          <h1 className="text-6xl font-bold">Abdulkadir Şenel</h1>
        </div>

        {/*//! ABOUT */}
        <div
          className={`${
            project || skill || contact || current ? "blur-sm" : null
          } flex flex-col p-3 rounded-xl mt-5 md:items-start`}
        >
          <div className="text-2xl flex flex-col items-start   ">
            <h2 className="font-medium">I am a </h2>
            <h3 className="text-3xl font-bold">Software Developer</h3>
          </div>
          <div className=" leading-6  tracking-tight text-xl text-left py-2">
            <div className="mb-2 pl-2 border-l-2 border-green-600">
              <p className="break-word text-green-700">
                {" "}
                I am a 20 year old studying ELT ( English Language Teaching),
                but I like to work with software in my free time.
              </p>
              <p className="mt-3 break-word text-green-700">
                My passion is making things wisely. The best thing is not always
                the hardest thing to make. Solve problems wisely{" "}
              </p>
              <p className=" font-bold mt-3 text-green-800">
                “Do not study hard , study smart.”
              </p>
              <div className="mt-3 flex flex-col "></div>
            </div>
          </div>
        </div>

        {/*//! SKİLLS */}
        <div
          ref={parent}
          className={`${
            project || contact || current ? "blur-sm " : ""
          } my-2 select-none rounded-xl py-2`}
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
            <h2 className={` text-4xl font-bold flex `}>
              <AiFillCaretRight className="mr-3" /> My toolkit
            </h2>
          </div>
          {skill && (
            <div className="p-3 mt-3 ml-2 border-l-2 border-green-600 text-green-700">
              {/* <h3 className="flex items-center underline underline-offset-8 decoration-2  text-lg font-medium">
                <BiBrain className="h-10 w-10 mr-2 rounded" /> My brain (problem
                solver)
              </h3> */}
              <h3 className="flex items-center font-bold text-lg leading-5 tracking-tight">
                My preffered technologies these are , in order to solve problem
                or create app.
              </h3>
              <div className="  mt-7">
                <ol className="list-decimal	list-inside grid ml-[10%] grid-rows-3 gap-x-9 grid-flow-col gap-2 ">
                  <li className="flex items-center font-bold">
                    <TbBrandReactNative className="h-8 w-8 mr-2 rounded" />{" "}
                    React
                  </li>
                  <li className="flex items-center font-bold">
                    <TbBrandNextjs className="h-8 w-8 mr-2 rounded" /> Next
                  </li>
                  <li className="flex items-center font-bold">
                    <TbBrandSvelte className="h-8 w-8 mr-2 rounded" /> Sanity
                  </li>
                  <li className="flex items-center font-bold">
                    <TbBrandFirebase className="h-8 w-8 mr-2 rounded" />{" "}
                    Firebase
                  </li>
                  <li className="flex items-center font-bold">
                    <SiExpo className="h-6 w-8 mr-2 rounded" /> Expo
                  </li>
                  <li className="flex items-center font-bold">
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
          } rounded-xl py-2 `}
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
            <h2 className={`flex select-none text-4xl font-bold }`}>
              <AiFillCaretRight className="mr-3" /> Contact
            </h2>
          </div>
          {contact ? (
            <div className="text-green-700 p-3 mt-3 ml-2 border-l-2 border-green-600">
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
                    className="flex items-center font-bold"
                  >
                    <TbBrandLinkedin className="h-8 w-8 mr-2 rounded" />
                    Linkedin
                  </a>
                  <a
                    href="https://github.com/abdulkadir-polmayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-bold"
                  >
                    <TbBrandGithub className="h-8 w-8 mr-2 rounded" /> Github
                  </a>
                  <a
                    href="https://twitter.com/spaceofAbdul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-bold"
                  >
                    <TbBrandTwitter className="h-8 w-8 mr-2 rounded" /> Twitter
                  </a>

                  <a
                    href="https://read.cv/abdulkadir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-bold"
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
          } rounded-xl py-2`}
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
            <h2 className={`select-none flex text-4xl font-bold }`}>
              <AiFillCaretRight className="mr-3" /> Current Work
            </h2>
          </div>
          {current ? (
            <div className="text-green-700 p-3 mt-3 ml-2 border-l-2 border-green-600">
              <p></p>
            </div>
          ) : null}
        </div>

        {/*//! PROJECTS */}
        <div
          ref={parent4}
          className={`${
            skill || contact || current ? "blur-sm" : null
          } items-center flex-col justify-center -mx-2 px-[50xp] mb-[10%] 
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
            className=" py-2"
          >
            <h3 className="flex text-4xl font-bold">
              <AiFillCaretRight className="mr-3 ml-2" /> My projects.
            </h3>
          </div>
          {project && (
            <div className="flex flex-col items-center  overflow-hidden text-green-700">
              {/* project */}
              <div className="flex flex-col shadow-lg w-[340px] m-1 max-w-sm  rounded my-10 bg-white ">
                <div className="flex justify-center p-5">
                  <div className="w-40 h-40 shadow-md bg-gradient-to-b from-white  to-yellow-100 rounded flex justify-center items-center pb-2">
                    <p className=" text-9xl text-center font-bold ">A</p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className=" font-bold text-3xl mb-2">Single page Blog</h4>
                  <p className="px-6  tracking-tight leading-5 text-md text-bold/70 text-left">
                    help people to remember the ideas of what they live for and
                    the importa of life
                  </p>
                  <p className="px-6 mt-2 font-bold leading-5 text-bold/90 text-left">
                    go to project :{" "}
                    <a className="font-medium text-bold/75 " href="">
                      www
                    </a>{" "}
                  </p>
                  <p className="px-6 mt-2 font-bold leading-5 text-bold/90 text-left">
                    Github :{" "}
                    <a className="font-medium text-bold/75 " href="">
                      www
                    </a>{" "}
                  </p>
                  <p className="px-6  mt-2 font-bold leading-5 text-bold/90 text-left">
                    How I did :{" "}
                    <a className="font-medium text-bold/75 " href="">
                      www
                    </a>{" "}
                  </p>
                  <p className=" mx-6 my-4 font-bold  text-bold/70 text-left">
                    2022
                  </p>
                </div>
              </div>
              <div className="flex flex-col shadow-lg w-[340px] m-1 max-w-sm  rounded my-10 bg-white ">
                <div className="flex justify-center p-5">
                  <div className="w-40 h-40 shadow-md bg-gradient-to-t from-bold  to-indigo-900 rounded flex justify-center items-center pb-2">
                    <p className="font-sans tracking-tighter font-medium text-white text-9xl text-center ">
                      M
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className=" font-bold text-3xl mb-2">Motivation</h4>
                  <p className="px-6  tracking-tight leading-5 text-md text-bold/70 text-left">
                    help people to inspire themself with their own imagination
                  </p>
                  <p className="px-6 mt-2 font-bold leading-5 text-bold/90 text-left">
                    go to project :{" "}
                    <a
                      className="font-medium text-bold/75 "
                      href="https://motivational-saids.vercel.app/"
                    >
                      motivational-saids
                    </a>{" "}
                  </p>
                  <p className="px-6 mt-2 font-bold leading-5 text-bold/90 text-left">
                    Github :{" "}
                    <a
                      className="font-medium text-bold/75 "
                      href="https://github.com/abdulkadir-polmayan/motivational-saids"
                    >
                      github.motivational-saids
                    </a>{" "}
                  </p>
                  <p className="px-6  mt-2 font-bold leading-5 text-bold/90 text-left">
                    How I did :{" "}
                    <a className="font-medium text-bold/75 " href="">
                      www
                    </a>{" "}
                  </p>
                  <p className=" mx-6 my-4 font-bold  text-bold/70 text-left">
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
