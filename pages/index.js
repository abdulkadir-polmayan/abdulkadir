import Link from "next/link";
import Me from "../components/Me";
export default function Home() {
  return (
    <div className=" flex justify-center overflow-hidden min-h-screen bg-white text-black bg-gradient-to-t  from-indigo-100 via-blue-100/50 to-transparent rounded m-2 md:m-12">
      <Me />
    </div>
  );
}
