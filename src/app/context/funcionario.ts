import { create } from 'zustand'
import { FuncionarioI } from '@/utils/types/funcionarios'

type FuncionarioStore = {
  funcionario: FuncionarioI
  logafuncionario: (funcionarioLogado: FuncionarioI) => void
  deslogafuncionario: () => void
}

export const usefuncionarioStore = create<FuncionarioStore>((set) => ({
  funcionario: {} as FuncionarioI,
  logafuncionario: (funcionarioLogado) => set({ funcionario: funcionarioLogado }),
  deslogafuncionario: () => set({ funcionario: {} as FuncionarioI }),

}))