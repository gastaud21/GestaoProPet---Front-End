"use client";
import { InteressadoList } from "@/app/components/Interessados/InteressadoList";
import { InteressadoI } from "@/app/utils/types/interessados";
import { useEffect, useState } from "react";
// import { SuprimentosI } from "../utils/types/suprimentos";
// import { ItemList } from "../components/Suprimentos/ItemList";

export default function Interessados() {
  const [interessados, setInteressados] = useState<InteressadoI[]>([]);

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/interessados`
      );
      const dados = await response.json();
      console.log(dados);
      setInteressados(dados);
    }
    buscaDados();
  }, []);

  const listaInteressados = interessados.map((interessado) => (
    <InteressadoList data={interessado} key={interessado.id} />
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
                  Já nos adotou
                </th>
                <th scope="col" className="px-6 py-3">
                  Telefone
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                  {/* <span className="sr-only">Ações</span> */}
                </th>
              </tr>
            </thead>
            <tbody>{listaInteressados}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
