import Link from "next/link";
import Me from "../components/Me";
export default function Home() {
  return (
    <div className=" flex justify-center overflow-hidden min-h-screen  text-black bg-gradient-to-b  from-slate-100  to-blue-100 rounded m-2 md:m-12">
      <Me />
    </div>
  );
}
