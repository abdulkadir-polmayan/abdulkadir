import Link from "next/link";
export default function Home() {
  return (
    <div >
      <h1 className="text-3xl text-center font-bold underline">Abdulkadir Şenel</h1>
      <Link href="/blogPosts">
        <button className="text-center">Go to my blogs</button>
      </Link>
    </div>
  );
}
