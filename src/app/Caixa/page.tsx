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