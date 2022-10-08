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

  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value);
    return (
      <img
        src={urlBuilder()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    );
  };

  const components = {
    types: {
      image: ({ value }) => (
        <img
          src={urlFor()
            .image(value)
            .width(200)
            .fit("max")
            .auto("format")
            .url()}
        />
      ),
    },
  };

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
      <div className="prose">
        <PortableText value={post[0].body} components={components} />
      </div>
      <div className="mt-24">
        {post.map((item, index) => (
          <div key={index} className="">
            {item.mainImage && (
              <Post
                id={index}
                body={item.body}
                img={urlFor(item.mainImage).width(77).height(77).url()}
                components={components}
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
