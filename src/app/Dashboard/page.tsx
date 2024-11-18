"use client";

import { AnimalEdit } from "../components/_Animais/_Cadastro/AnimalEdit";
import Select from "../components/_Testes/Select";

export default function Dashboard() {
  return (
    <div className="bg-primary-bg m-3">
      <div className="m-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-[440px] w-[440px]">
          {/* <AnimalEdit /> */}
          <Select idItem={5} />
        </div>
      </div>
    </div>
  );
}
