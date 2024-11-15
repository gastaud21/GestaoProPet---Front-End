"use client";
import { useEffect, useState } from "react";
import { LancamentoI } from "../utils/types/lancamento";
import { LancamentosList } from "../components/Caixa/LancamentosList";

export default function Caixa() {
  const [lancamentos, setLancamentos] = useState<LancamentoI[]>([]);

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
    <div className="bg-primary-bg">
      <div className="m-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex">
            <button
              type="button"
              className="text-primary-bgHeader flex bg-primary-caixa-Entrada font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L21 10H16.0104L16 21L8 21L8 10H3L12 3Z"
                  stroke="#2C2C2C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Entrada</span>
            </button>
            <button
              type="button"
              className="text-white flex bg-primary-caixa-Saida font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21L3 14H7.98961L8 3L16 3V14L21 14L12 21Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Saída</span>
            </button>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-primary-table">
            <thead className="text-base text-primary-table  bg-white border-b-2 border-primary-linetable">
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
  );
}
