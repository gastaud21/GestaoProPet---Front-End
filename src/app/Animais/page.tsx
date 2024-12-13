"use client";

import { Just_Me_Again_Down_Here } from "next/font/google";
import CardAnimal from "../components/_Animais/CardAnimal";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimalI } from "../utils/types/animal";

const font = Just_Me_Again_Down_Here({
  weight: ["400"],
  subsets: ["latin"],
});

// useEffect(() => {
//   async function buscaDados() {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/caixa`);
//     const dados = await response.json();
//     if (dados) {
//       const dadosTratados: [] = dados.map((movimentacao: any) => ({
//         key: parseInt(movimentacao.id),
//         dia: parseInt(movimentacao.dia), // Converte o 'dia' de string para number
//         mes: movimentacao.mes, // Mantém 'mes' como string
//         ano: parseInt(movimentacao.ano), // Converte 'ano' de string para number
//         tipo: movimentacao.tipo, // Mantém 'tipo' como string
//         valor: parseFloat(movimentacao.valor), // Converte 'valor' de string para number
//         origem: movimentacao.origem, // Mantém 'origem' como string
//         descricao: movimentacao.descricao,
//       }));

//       setLancamentos(dadosTratados);
//     }
//   }
//   buscaDados();
// }, []);

// const listaLancamentos = lancamentos.map((lancamento) => (
//   <LancamentosList data={lancamento} key={lancamento.id} />
// ));

// function dataModalLancamento(lancamento: LancamentoI) {
//   console.log(lancamento);

//   if (lancamento == saidaVazia) {
//     setLancamentoModal(lancamento);
//   }
//   if (lancamento == entradaVazia) {
//     setLancamentoModal(lancamento);
//   }
// }

export default function Animais() {
  const [animais, setAnimais] = useState<AnimalI[]>([]);

  return (
    <div className="flex flex-col p-7 gap-4">
      <div className="flex justify-between">
        <div>
          <input
            type="text"
            className="w-[677px] h-[61px] rounded-2xl shadow"
            placeholder="Pesquise pelo nome"
          />
        </div>
        <Link
          href="Animais/Cadastro"
          className="flex items-center bg-primary-botaoGG text-white hover:bg-primary-botaoGGHover font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Novo Animal
        </Link>
      </div>
      <div className="flex gap-11">
        <CardAnimal />
        <CardAnimal />
      </div>
    </div>
  );
}
