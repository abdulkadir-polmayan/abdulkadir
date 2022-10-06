import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client/client";
import Post from "../components/post";
import { BsChevronLeft } from "react-icons/bs";
import { PortableText } from "@portabletext/react";

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

  return (
    <div className="overflow-hidden">
      <div className="p-3 fixed top-0 z-30 w-full">
        <div className="flex justify-between p-3 m-3 bg-slate-300 rounded sticky top-0	">
          <h2 className="flex font-monsterrat font-semibold justify-center items-center">
            <BsChevronLeft className="h-5 w-5 mr-2" />
            <Link href="/">back home</Link>
          </h2>
          <h1 className="font-merri">BLOGS</h1>
          <h3>how i did</h3>
        </div>
      </div>
      <div className="mt-24">
        {post.map((item, index) => (
          <div key={index} className="">
            {item.mainImage && (
              <Post
                id={index}
                body={item.body}
                img={urlFor(item.mainImage).width(77).height(77).url()}
                // articleImage={}
                title={item.title}
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
