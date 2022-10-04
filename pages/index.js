import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../client/client";
import Post from "../components/post";
export default function Home() {
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

  return (
    <div>
      {data &&
        data.map((item, index) => (
          <Post
            body={item.body}
            img={urlFor(item.mainImage).width(200).url()}
            title={item.title}
          />
        ))}
    </div>
  );
}
