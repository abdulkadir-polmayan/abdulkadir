import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import urlBuilder from "@sanity/image-url";
import sanityClient from "../client/client";
import Post from "../components/post";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Navbar from "../components/Navbar";

export default function Blogs({ post }) {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == "post"]{
  //       title,
  //       slug,
  //       author,
  //       mainImage{
  //         asset->{
  //           _id,
  //           url
  //         },
  //       },
  //       categories,
  //       publishedAt,
  //       body,
  //     }`
  //     )
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  const builder = imageUrlBuilder(sanityClient);

  const urlFor = (source) => builder.image(source);

  const components = {
    types: {
      image: ({ value }) => (
        <img src={urlFor().image(value).width(800).height(400).url()} />
      ),
    },
  };

  return (
    <div className="overflow-hidden flex items-center flex-col bg-white text-black">
      <div className="flex flex-col md:flex-row p-4">
        <h1 className="text-9xl font-bold font-serif text-left">Blogs</h1>
        <div className=" flex-auto my-5 md:p-5 flex items-end">
          <Link href="/">
            <p className="select-none font-serif underline text-xl">
              Whats going on here ?
            </p>
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center  mx-1 max-w-xl  ">
        {post.map((item, index) => (
          <div key={index} className="min-w-full">
            {item.mainImage && (
              <Post
                // date={item.publishedAt}
                id={index}
                body={item.body}
                img={urlFor(item.mainImage).width(77).height(77).url()}
                components={components}
                title={item.title}
                sentence={item.sentence}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const post = await sanityClient.fetch(query);

  return {
    props: { post },
  };
};
