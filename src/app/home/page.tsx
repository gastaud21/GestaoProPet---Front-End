"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";
// import { useClienteStore } from "@/context/cliente";

// type Inputs = {
//   email: string;
//   senha: string;
//   manter: boolean;
// };

export default function Home() {
  return (
    <div className="bg-primary-bg">
      <div className="">
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
