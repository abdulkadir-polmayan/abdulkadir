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
        blog ? "bg-slate-200" : "bg-slate-100"
      }`}
    >
      <div className="article-face p-2 flex flex-col">
        <div className="flex">
          <img className="rounded" src={props.img} />
          <div>
            <p>{props.date}</p>
            <h1 className="p-2 text-xl font-bold">{props.title}</h1>
          </div>
        </div>
        <div className="text-center">
          <button
            className={`  text-center font-semibold bg-slate-300 rounded px-2 py-1 `}
            onClick={openBlog}
          >
            Open article
          </button>
        </div>
      </div>

      {blog && (
        <div className={` duration-300  p-2 prose `}>
          <PortableText value={props.body} components={props.components} />
        </div>
      )}
    </div>
  );
};
//${blog ? "hidden" : "block"}

export default Blog;
