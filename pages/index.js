import Link from "next/link";
import Me from "../components/Me";
export default function Home() {
  return (
    <div className=" flex justify-center overflow-hidden min-h-screen bg-green-200  text-green-700  rounded m-2 md:m-8 md:pt-5">
      <Me />
    </div>
  );
}
