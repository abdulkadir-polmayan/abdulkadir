import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import urlBuilder from "@sanity/image-url";
import sanityClient from "../client/client";
import Post from "../components/post";
import { BsChevronLeft } from "react-icons/bs";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

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
        <img src={urlFor().image(value).width(400).height(200).url()} />
      ),
    },
  };

  return (
    <div className="overflow-hidden bg-white ">
      <div className="p-0 fixed top-0 z-30 w-full">
        <div className="lg:mx-56 flex justify-between  p-3 backdrop-blur-sm bg-white/60 rounded sticky top-0	">
          <h2 className="flex  left-0 flex-1 font-roboto   items-center">
            <BsChevronLeft className="h-5 w-5 mr-2" />
            <Link href="/">back home</Link>
          </h2>
          <h1 className="font-bold text-2xl text-center flex-1">BLOGS</h1>
          <div className="flex-1  text-center items-center grid justify-items-end">
            <button className="px-2 py-1 rounded backdrop-blur-sm bg-sky-300/40">
              How I did
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mx-80 divide-y-4 mx-1  divide-slate-400/25 ">
        {post.map((item, index) => (
          <div key={index} className="">
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
