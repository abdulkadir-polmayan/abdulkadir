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
    <div>
      <Link href="/">fghjkl</Link>
      {data &&
        data.map((item, index) => (
            <div>
               {item.mainImage&& <Post
            key={index}
            id={index}
            body={item.body}
            img={urlFor(item.mainImage).width(200).url()}
            title={item.title}
          /> }
          {/* <Post
            key={index}
            id={index}
            body={item.body}
            img={urlFor(item.mainImage).width(200).url()}
            title={item.title}
          /> */}
          </div>
        ))}
    </div>
  );
}
