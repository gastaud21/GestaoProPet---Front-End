"use client";

import { Just_Me_Again_Down_Here } from "next/font/google";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";


const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
   
       <div 
      >
        {" "}
        <div className="">
          <Header />
        </div>
        <div className="flex">
          <Sidebar />
      </div>
    </div>
  );
}
