import React from "react";
import Link from "next/link";

const Me = () => {
  return (
    <div>
        
      <header>
        <h1 className="text-7xl font-serif">Abdulkadir Şenel</h1>
        <h2>I am junior</h2>
        <h3>
          <ul>
            <li>Mobile developer</li>
            <li>English Teacher</li>
          </ul>
        </h3>
      </header>
      <Link href="/blogPosts">
        <button className="text-center">Go to my blogs</button>
      </Link>
    </div>
  );
};

export default Me;
