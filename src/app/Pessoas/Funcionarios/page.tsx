"use client";

import { useEffect, useState } from "react";
import { FuncionarioI } from "@/app/utils/types/funcionarios";
import { FuncionarioList } from "@/app/components/Funcionarios/FuncionarioList";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState<FuncionarioI[]>([]);

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/funcionarios`
      );
      const dados = await response.json();
      console.log(dados);
      setFuncionarios(dados);
    }
    buscaDados();
  }, []);

  const listaFuncionarios = funcionarios.map((funcionario) => (
    <FuncionarioList data={funcionario} key={funcionario.id} />
  ));

  return (
    <div className="bg-primary-bg m-3">
      <div className="m-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-primary-table">
            <thead className="text-base text-primary-table  bg-white border-b-2 border-primary-linetable">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Código
                </th>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  Função
                </th>
                <th scope="col" className="px-6 py-3">
                  Telefone
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>{listaFuncionarios}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
