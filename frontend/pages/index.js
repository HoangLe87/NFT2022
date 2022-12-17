import { Inter } from "@next/font/google";
import React from "react";
import { useEffect, useState } from "react";
import ThreeJS from "./components/ThreeJS";
import Image from "next/Image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className="">
      <div className='absolute top-0 left-0 w-screen h-screen'>
        <ThreeJS/>
      </div>
        <h1 className="relative text-center mt-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-purple-600">Welcome to Crypto Devs</h1>
    </div>
    <div className="mt-auto bg-neutral-900 h-screen w-screen"><h1>WTF</h1></div>
    <div className="mt-auto bg-gradient-to-b from-black to-slate-500 h-screen w-screen"><h1>WTF</h1></div>
    </>
  );
}
