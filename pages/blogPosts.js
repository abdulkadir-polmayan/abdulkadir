import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client/client";
import Post from "../components/post";

export default function Blogs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        author,
        mainImage{
          asset->{
            _id,
            url
          },
        },
        categories,
        publishedAt,
        body,
      }`
      )
      .then((data) => {
        setData(data);
      });
  }, []);
  const builder = imageUrlBuilder(sanityClient);

  const urlFor = (source) => builder.image(source);
  return (
    <div className="overflow-hidden">
      <navbar className="">
        <div className="flex justify-between p-3">
          <h2>
            <Link href="/">back home</Link>
          </h2>
          <h1>BLOGS</h1>
          <h3>how i did</h3>
        </div>
      </navbar>

      {data &&
        data.map((item, index) => (
          <div key={index} className="">
            {item.mainImage && (
              <Post
                id={index}
                body={item.body}
                img={urlFor(item.mainImage).width(77).height(77).url()}
                title={item.title}
              />
            )}
          </div>
        ))}
    </div>
  );
}
