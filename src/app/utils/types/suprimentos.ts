import { CategoriaI } from "./categorias";

export interface SuprimentosI {
  id: number;
  item: string;
  // categoria: CategoriaI;
  // categoriaID: number;
  categoriaId: string;
  estoque: number;
  unidade: string;
  marca: string;
  minqtd: number;
  descricao: string;
}
