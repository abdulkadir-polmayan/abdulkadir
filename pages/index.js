import Link from "next/link";
import Me from "../components/Me";
export default function Home() {
  return (
    <div className=" flex justify-center overflow-hidden min-h-screen  text-black bg-gradient-to-b  from-indigo-100  to-green-100 rounded m-2 md:m-12">
      <Me />
    </div>
  );
}
