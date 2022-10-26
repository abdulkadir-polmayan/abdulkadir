import Link from "next/link";
import Me from "../components/Me";
export default function Home() {
  return (
    <div className=" flex justify-center overflow-hidden min-h-screen font-roboto bg-green-200  text-green-900  rounded  md:pt-5">
      <Me />
    </div>
  );
}
