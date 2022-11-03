import Me from "../components/Me";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className=" flex justify-center overflow-hidden min-h-screen font-inter bg-green-200  text-green-900   md:pt-5">
      <Me />
      <Analytics />

      {/* <Deneme /> */}
    </div>
  );
}
