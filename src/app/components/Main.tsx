"use client";

import Link from "next/link";
import {} from "flowbite";
import { Just_Me_Again_Down_Here } from "next/font/google";
import CardAnimal from "./Cards/CardAnimal";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

export function Main() {
  return (
    <div className="flex p-7">
      <div className="flex gap-11">
        <CardAnimal />
        <CardAnimal />
      </div>
    </div>
  );
}
