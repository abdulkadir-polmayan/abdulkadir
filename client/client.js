import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: "c3sj114g",
  dataset: "production",
  apiVersion: "2022-10-02",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
