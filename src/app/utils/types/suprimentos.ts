import { CategoriaI } from "./categorias";

export interface SuprimentosI {
  id: number;
  item: string;
  categoria: CategoriaI;
  categoriaID: number;
  estoque: number;
  unidade: string;
}
