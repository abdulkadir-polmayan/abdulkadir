import { useState } from "react";
import { PortableText } from "@portabletext/react";

const Blog = (props) => {
  const [blog, setBlog] = useState(false);

  const openBlog = () => {
    setBlog((prev) => !prev);
  };

  return (
    <div key={props.id} className="border-solid border-2 border-sky-500 m-2">
      <div className="p-2 flex flex-col">
        <div className="flex">
          <img className="rounded" src={props.img} />
          <h1 className="p-2 text-xl font-bold">{props.title}</h1>
        </div>
        <div className="text-center">
          <button
            className="open transition hover:bg-slate-700 text-center border-solid border-b-2 border-sky-500 m-2 "
            onClick={openBlog}
          >
            open article
          </button>
        </div>
      </div>
      <div className={`${blog ? "hidden" : "block"} p-2 transition `}>
        <PortableText value={props.body} />
      </div>
    </div>
  );
};
//

export default Blog;
