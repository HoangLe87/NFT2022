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
        <h1 className="absolute z-10 w-full mx-auto text-center mt-32 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-purple-600">
          Welcome to Crypto Devs
        </h1>
        <div className="w-screen h-screen">
          <ThreeJS />
        </div>
      </div>
      <div className="m-0 bg-gradient-to-b from-black to-slate-500 h-screen w-screen">
        <h1>WTF</h1>
      </div>
      <div className="m-0 bg-gradient-to-b from-slate-500 to-black h-screen w-screen">
        <h1>WTF</h1>
      </div>
    </>
  );
}
