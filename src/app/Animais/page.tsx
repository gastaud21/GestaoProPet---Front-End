"use client";

import { Just_Me_Again_Down_Here } from "next/font/google";
import CardAnimal from "../components/Cards/CardAnimal";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});
// import { useClienteStore } from "@/context/cliente";

// type Inputs = {
//   email: string;
//   senha: string;
//   manter: boolean;
// };

export default function Animais() {
  return (
    <div className="flex p-7">
      <div className="flex gap-11">
        <CardAnimal />
        <CardAnimal />
      </div>
    </div>
  );
}
