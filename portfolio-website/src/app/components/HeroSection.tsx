"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I'm Daniel
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a passionate Full Stack Developer with experience in Node.js,
            Express, SQL, Mongo, and React, specializing in backend development
            for scalable web applications.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-2 bg-blue-500 text-black hover:bg-slate-200">
              Contact me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent  hover:bg-slate-800 border border-blue-500">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 sm:ml-8">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-60 h-full"
              src={"./images/photoDaniel.png"}
              alt="Photo"
              width={180}
              height={180}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
