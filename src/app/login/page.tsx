"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CardLogin } from "../components/CardLogin";
// import { useClienteStore } from "@/context/cliente";

type Inputs = {
  email: string;
  senha: string;
  manter: boolean;
};

export default function Login() {
  return (
    <div className="bg-primary-bg">   
      <CardLogin />
    </div>
  );
}
