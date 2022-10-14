import { useState, useRef, useEffect } from "react";
import {
  PortableText,
  PortableTextComponentsProvider,
} from "@portabletext/react";
import autoAnimate from "@formkit/auto-animate";
import { BsChevronDown } from "react-icons/bs";

const Blog = (props) => {
  const [blog, setBlog] = useState(false);
  const parent = useRef(null);
  const parent2 = useRef(null);
  const openBlog = () => {
    setBlog((prev) => !prev);
  };
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  useEffect(() => {
    parent2.current && autoAnimate(parent2.current);
  }, [parent2]);
  return (
    <div
      ref={parent}
      key={props.id}
      className={` border-solid m-2 transition rounded bg-gradient-to-r shadow-xl from-green-300/50 to-green-100 ${
        blog ? "bg-slate-50" : "bg-slate-0"
      }`}
    >
      <div className="article-face p-2 flex flex-row justify-between ">
        <div className={`flex ${blog ? null : null}  items-center`}>
          <img className="rounded shadow-lg" src={props.img} />
          <div className="" ref={parent2}>
            <h1 className="ml-4 p-2 text-2xl  font-semibold tracking-wide">
              {props.title}
            </h1>
            {blog ? null : (
              <p className="pl-4 pr-1 text-black/70 font-serif">
                {props.sentence}
              </p>
            )}
          </div>
        </div>
        <div className="text-center mb-2 justify-center items-center flex">
          <button
            className={` mb-2 text-center  px-2 py-1 `}
            onClick={openBlog}
          >
            <BsChevronDown className="h-5 w-5 mr-2" />
          </button>
        </div>
      </div>
      {blog && (
        <div
          className={` duration-300 text-xl text-black p-2 prose font-serif tracking-tight `}
        >
          <PortableText value={props.body} components={props.components} />
        </div>
      )}
    </div>
  );
};
//${blog ? "hidden" : "block"}

export default Blog;
