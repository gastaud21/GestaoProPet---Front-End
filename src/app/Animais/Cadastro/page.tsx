"use client";

import { Datepicker } from "flowbite-react/components/Datepicker";
import { Just_Me_Again_Down_Here } from "next/font/google";
import { useState } from "react";
import { maskCPF, maskTel } from "@/app/components/_Mascaras/masks";
import Link from "next/link";
import { ImagemMini } from "@/app/components/_Suprimentos/_Cadastro/ImagemMini";
import { useForm, SubmitHandler } from "react-hook-form";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function CadastroAnimal() {
  const [cpf, setCpf] = useState<string>("");
  const [tel, setTel] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  function handleChangeMask(event: any) {
    const { value }: { value: string } = event.target;

    setCpf(maskCPF(value) ?? ""); // Se maskCPF(value) for undefined, passa uma string vazia
  }

  function MaskTelFuncion(event: any) {
    const { value }: { value: string } = event.target;

    setTel(maskTel(value) ?? ""); // Se maskTel(value) for undefined, passa uma string vazia
  }

  return (
    <div className="flex flex-col p-7">
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
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <div className="w-[961px] h-[auto] bg-white rounded-[32px] pt-[17px] pl-[64px] pb-[32px] pr-[33px] shadow-lg">
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
        </div> */}
        <div className="flex flex-col gap-7 w-[961px] bg-white rounded-[32px] py-[40px] pl-[64px] pr-[33px] shadow-lg">
          <div className="flex text-black">
            <div className="h-auto max-w-[370px] rounded-lg">
              <img src="/Teste/Duke.png" alt="" className="h-auto rounded-lg" />
            </div>
            {/* Começo do  form de dado escrito*/}
            <div className="flex flex-col text-black  w-[100%] gap-3 ps-[50px]">
              <div className="flex gap-4 justify-start">
                <div className="flex flex-col w-[60px]">
                  <label htmlFor="" className="font-bold">
                    Código
                  </label>
                  <input
                    type="text"
                    className="rounded-[8px] border-none h-[37px] bg-gray-400 text-center shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                    value={1}
                    disabled
                  />
                </div>
                <div className="flex flex-col w-[100%]">
                  <label htmlFor="" className="font-bold">
                    Nome do Animal
                  </label>
                  <input
                    type="text"
                    className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                    value={"Arthurito"}
                  />
                </div>
                <div className="flex flex-col w-[70px]">
                  <label htmlFor="" className="font-bold">
                    Ativo
                  </label>
                  <div className="">
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-between">
                <div className="flex flex-col w-[60px]">
                  <label htmlFor="" className="font-bold">
                    Peso
                  </label>
                  <input
                    type="text"
                    className="rounded-[8px] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                    value={"8 Kg"}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-bold">
                    Porte
                  </label>
                  <select
                    id="Castrado"
                    className="rounded-[8px] w-fit border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  >
                    <option selected defaultValue={"Antipulgas"}>
                      Selecione
                    </option>
                    <option value="PP">PP</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="" className="font-bold">
                    Nascimento aproximado
                  </label>
                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>

                    <div className="relative max-w-sm">
                      {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div> */}
                      <Datepicker translate="yes" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <label htmlFor="" className="font-bold">
                    Castrado(a)
                  </label>
                  <select
                    id="Castrado"
                    className="rounded-[8px] w-[-webkit-fill-available] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  >
                    <option selected defaultValue={"Antipulgas"}>
                      Selecione
                    </option>
                    <option value="Casado">Não</option>
                    <option value="Solteiro">Pelo Abrigo</option>
                    <option value="Divorciado">Já veio castrado</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="" className="font-bold">
                    Castração data Aproximada
                  </label>
                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>

                    <div className="relative max-w-sm">
                      {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div> */}
                      <Datepicker translate="yes" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col w-[150px]">
                  <label htmlFor="" className="font-bold">
                    Status
                  </label>
                  <select
                    id="Status"
                    className="rounded-[8px] w-[-webkit-fill-available] border-none h-[37px] shadow-[1px_1px_2.5px_2px_#00000040] flex items-center justify-center"
                  >
                    <option selected defaultValue={"Antipulgas"}>
                      Selecione
                    </option>
                    <option value="Casado">Disponível para Adoção</option>
                    <option value="Solteiro">Adotado(a)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black flex justify-between items-end gap-[10rem]">
            {/* div pra botao de foto mais fotos */}
            <div className="flex flex-col gap-1 w-fit justify-center items-center">
              <p className="font-bold">Adicionar Fotos</p>
              <input className="py-2 px-6 flex justify-center rounded-[8px] shadow-[1px_1px_2.5px_2px_#00000040]">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <input type="file" id="NovaFoto"></input> */}
                  <path
                    d="M15 18.75H63.75V45H71.25V18.75C71.25 14.6137 67.8862 11.25 63.75 11.25H15C10.8637 11.25 7.5 14.6137 7.5 18.75V63.75C7.5 67.8862 10.8637 71.25 15 71.25H45V63.75H15V18.75Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M30 41.25L18.75 56.25H60L45 33.75L33.75 48.75L30 41.25Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M71.25 52.5H63.75V63.75H52.5V71.25H63.75V82.5H71.25V71.25H82.5V63.75H71.25V52.5Z"
                    fill="black"
                    fillOpacity="0.8"
                  />
                </svg>
              </input>
            </div>
            <div className="flex justify-between w-[calc(100%-126px)]">
              <ImagemMini caminho="Teste/imagemFake.png" />
              <ImagemMini caminho="Teste/imagemFake.png" />
              <ImagemMini caminho="Teste/imagemFake.png" />
              <ImagemMini caminho="Teste/imagemFake.png" />
            </div>
          </div>
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

          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>
      </form>
    </div>
  );
}
