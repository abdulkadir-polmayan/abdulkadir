import { useState } from "react";
import { PortableText } from "@portabletext/react";

const Blog = (props) => {
  const [blog, setBlog] = useState(true);
  const [move, setMove] = useState(true);

  const openBlog = () => {
    setBlog((prev) => !prev);
    setMove((prev) => !prev);
  };

  return (
    <div
      key={props.id}
      className={`border-solid m-2 transition rounded ${
        blog ? "bg-slate-100" : "bg-slate-200"
      }`}
    >
      <div className="p-2 flex flex-col">
        <div className="flex">
          <img className="rounded" src={props.img} />
          <h1 className="p-2 text-xl font-bold">{props.title}</h1>
        </div>
        <div className="text-center">
          <button
            className={`transition ${
              blog ? "" : "translate-y-1"
            } text-center border-solid border-b-2 border-sky-500 m-2 `}
            onClick={openBlog}
          >
            open article
          </button>
        </div>
      </div>
      <div
        className={`transition ${
          blog
            ? "invisible -translate-y-6 absolute"
            : "block translate-y-0 opacity-100"
        } p-2 transition `}
      >
        <PortableText value={props.body} />
      </div>
    </div>
  );
};
//${blog ? "hidden" : "block"}

export default Blog;
