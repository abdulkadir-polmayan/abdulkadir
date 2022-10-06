import { useState, useRef, useEffect } from "react";
import {
  PortableText,
  PortableTextComponentsProvider,
} from "@portabletext/react";
import autoAnimate from "@formkit/auto-animate";

const Blog = (props) => {
  const [blog, setBlog] = useState(false);
  const parent = useRef(null);
  const openBlog = () => {
    setBlog((prev) => !prev);
  };
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div
      ref={parent}
      key={props.id}
      className={`border-solid m-2 transition rounded ${
        blog ? "bg-slate-100" : "bg-slate-200"
      }`}
    >
      <div className="article-face p-2 flex flex-col">
        <div className="flex">
          <img className="rounded" src={props.img} />
          <h1 className="p-2 text-xl font-bold">{props.title}</h1>
        </div>
        <div className="text-center">
          <button
            className={`  text-center border-solid border-b-2 border-sky-500 m-2 `}
            onClick={openBlog}
          >
            open article
          </button>
        </div>
      </div>

      {blog && (
        <div className={` duration-300  p-2 prose `}>
          <PortableText value={props.body} />
        </div>
      )}
    </div>
  );
};
//${blog ? "hidden" : "block"}

export default Blog;
