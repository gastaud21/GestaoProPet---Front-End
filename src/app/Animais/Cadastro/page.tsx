"use client";

import { Just_Me_Again_Down_Here } from "next/font/google";
import Link from "next/link";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

export default function CadastroAnimal() {
  return (
    <div className="flex flex-col gap-4 p-7">
      <div className="flex gap-2 items-center">
        <Link href="/Animais" className="text-primary-menu">
          Animais
        </Link>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.93182 4.90909L0.613636 8.63636V7.18182L6.22727 4.47727L6.18182 4.56818V4.34091L6.22727 4.43182L0.613636 1.72727V0.272727L7.93182 4V4.90909Z"
            fill="#CFCDCC"
          />
        </svg>
        <Link href="/Animais/Cadastro" className="text-primary-menu font-bold">
          Edição de Animal
        </Link>
      </div>
      <form action="" className="flex flex-col gap-4">
        <div className="w-[961px] h-[204px] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
          <div className="flex flex-col text-black">
            <div className="">imagem</div>
            <div className="flex flex-col text-black">
              <div className="flex">
                <div>
                  <label htmlFor="">Código</label>
                  <input
                    type="number"
                    className="
                    block
                    w-full
                    p-4 
                    text-gray-900
                    border 
                    border-gray-300
                    rounded-lg
                    bg-gray-50 text-base
                    focus:ring-blue-500
                    focus:border-blue-500
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                    "
                  />
                </div>
                <div>
                  <label htmlFor="">Nome do animal</label>
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="">Peso</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="flex">
                  <label htmlFor="">Status</label>
                  <input type="number" />
                </div>
                <div>
                  <label htmlFor="">Nascimento Aproximado</label>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black">fotos</div>
        </div>
        <div className="w-[961px] h-[204px] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
          <h4 className="text-black font-extrabold">Observações</h4>
          <textarea
            name=""
            id=""
            className="w-[859px] h-[107px] bg-white rounded-xl shadow-lg"
          ></textarea>
        </div>
        <div className="w-[961px] h-[204px] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
          <h4 className="text-black font-extrabold">Histórico de Adoção</h4>
          <textarea
            name=""
            id=""
            className="w-[859px] h-[107px] bg-white rounded-xl shadow-lg"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
