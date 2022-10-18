import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col shadow-lg  backdrop-blur-sm bg-white/50 m-1  rounded  my-10  md:mt-[120px]">
      <div className="flex justify-center p-5">
        <div className="w-40 h-40 bg-red-600/40 rounded"></div>
      </div>
      <div className="text-center">
        <h4 className=" font-black text-3xl mb-2">Note</h4>
        <p className="mx-6 font-serif tracking-tight leading-5 text-md text-black/70 text-left">
          help people to remember the ideas of what they live for and the
          importa of life
        </p>
        <p className=" m-6 font-black  text-black/70 text-left">2019</p>
      </div>
    </div>
  );
};

export default Project;
