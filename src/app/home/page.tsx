"use client";

import { Just_Me_Again_Down_Here } from "next/font/google";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex p-7">
      <div className="flex gap-11"></div>
    </div>
  );
}
