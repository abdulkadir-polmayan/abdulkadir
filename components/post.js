import { useState } from "react";
import { PortableText } from "@portabletext/react";

const Blog = (props) => {
  const [blog, setBlog] = useState(false);

  const openBlog = () => {
    setBlog((prev) => !prev);
  };

  return (
    <div key={props.id}>
      <div>
        <h1>{props.title}</h1>
        <img src={props.img} />
        <button onClick={openBlog}>sağlmasa</button>
      </div>
      <div style={{ display: blog ? null : "none" }}>
        <PortableText value={props.body} />
      </div>
    </div>
  );
};
//

export default Blog;
