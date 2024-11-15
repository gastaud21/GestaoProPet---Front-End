"use client";
import { useEffect, useState } from "react";
import { SuprimentosI } from "../utils/types/suprimentos";
import { ItemList } from "../components/Suprimentos/ItemList";
import Link from "next/link";
// import { useClienteStore } from "@/context/cliente";

// type Inputs = {
//   email: string;
//   senha: string;
//   manter: boolean;
// };

export default function Suprimentos() {
  const [suprimentos, setSuprimentos] = useState<SuprimentosI[]>([]);

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/suprimentos`
      );
      const dados = await response.json();
      console.log(dados);
      setSuprimentos(dados);
    }
    buscaDados();
  }, []);

  const listaSuprimentos = suprimentos.map((suprimento) => (
    <ItemList data={suprimento} key={suprimento.id} />
  ));

  return (
    <div className="flex flex-col bg-primary-bg m-3">
      <div className="flex justify-between">
        <input
          type="text"
          className="w-[450px] h-[61px] rounded-2xl shadow"
          placeholder="Pesquise pelo nome"
        />

        <Link
          href="Suprimentos/Cadastro"
          className="bg-primary-botaoGG text-white hover:bg-primary-botaoGGHover focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center"
        >
          Novo Suprimento
        </Link>
      </div>
      <div className="m-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-primary-table">
            <thead className="text-base text-primary-table  bg-white border-b-2 border-primary-linetable">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Código
                </th>
                <th scope="col" className="px-6 py-3">
                  Item
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantidade
                </th>
                <th scope="col" className="px-6 py-3">
                  Categoria
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                  {/* <span className="sr-only">Ações</span> */}
                </th>
              </tr>
            </thead>
            <tbody>{listaSuprimentos}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
