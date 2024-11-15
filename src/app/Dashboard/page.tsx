"use client";

import { AnimalEdit } from "../components/Animais/Cadastro/AnimalEdit";

export default function Dashboard() {
  return (
    <div className="bg-primary-bg m-3">
      <div className="m-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <AnimalEdit />
        </div>
      </div>
    </div>
  );
}
