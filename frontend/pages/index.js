import { Inter } from "@next/font/google";
import React from "react";
import { useEffect, useState } from "react";
import ThreeJS from "./components/ThreeJS";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <ThreeJS />
      <div>
        <h1>Welcome to NFT2022</h1>
        <p>Its an NFT collection for developers in Crypto.</p>
        {10} have already joined the Whitelist
      </div>
    </div>
  );
}
