"use client";
import { useEffect, useState } from "react";
import { LancamentoI } from "../utils/types/lancamento";
import { LancamentosList } from "../components/Caixa/LancamentosList";
import { Entrada } from "./Componets/entrada"
import { Saida } from "./Componets/saida";

export default function Caixa() {
  const [lancamentos, setLancamentos] = useState<LancamentoI[]>([]);
  const [abrirEntrada, setAbrirEntrada] = useState(false);
  const [abrirSaida, setAbrirSaida] = useState(false);
  function AbrirEntrada() {   
      setAbrirEntrada(!abrirEntrada);
  }
  function AbrirSaida() {   
    setAbrirSaida(!abrirSaida);
  }
  

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/caixa`);
      const dados = await response.json();
      console.log(dados);
      setLancamentos(dados);
    }
    buscaDados();
  }, []);

  const listaLancamentos = lancamentos.map((lancamento) => (
    <LancamentosList data={lancamento} key={lancamento.id} />
  ));

  return (
    <div className="mt-10 ml-3 w-screen relative"
   
    >

      <div className="m-3 mb-8 flex justify-between" >
        <div className="flex flex-col">

          <label className="text-black font-semibold ml-1">Mês</label>
          <input type="month" name="mes" id="mes"
            className=" h-9 pl-3 w-40 relative overflow-x-auto shadow-md sm:rounded-lg text-base text-primary-table  bg-white border-b-2
             border-primary-linetable" />
        </div>
       
        <div className="flex ">
        
          <div>
            <button type="button"
              className="bg-primary-caixa-Entrada  p-2 sm:rounded-lg 
          font-semibold w-44 m-3 text-primary-caixa-Textobutton flex  justify-center "
          onClick={AbrirEntrada}>

              <svg width="20" height="17" className="mr-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L19 8H14.0104L14 19L6 19L6 8H1L10 1Z" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Entrada</button>
             
          </div>
            
          <button type="button"
            className="bg-primary-caixa-Saida  p-2 sm:rounded-lg 
          font-semibold w-44 m-3 text-white flex justify-center"
          onClick={AbrirSaida}
          >

            <svg width="20" height="17" className="mr-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 19L1 12H5.98961L6 1L14 1V12L19 12L10 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Saida</button>
            
        </div>
        <div className={` absolute z-50 right-64 top-14 w-2/6 ${abrirEntrada ? "" : "hidden"}`} >              
              <Entrada />
            </div>
            <div className={` absolute z-50 right-20 top-14 w-48 ${abrirSaida ? "" : "hidden"}`} >              
              <Saida />
            </div>
      </div>



      <div className="bg-primary-bg">
        <div className="m-3">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-primary-table">
              <thead className="
            text-base text-primary-table  bg-white border-b-2
             border-primary-linetable">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Dia
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descrição do Lançamento
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Valor R$
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Origem
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ações
                    {/* <span className="sr-only">Ações</span> */}
                  </th>
                </tr>
              </thead>
              <tbody>{listaLancamentos}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
