import { ImagemMini as ImagemMiniImportada } from "@/app/utils/types/imagemMini";
import Link from "next/link";

export function ImagemMini({ caminho }: ImagemMiniImportada) {
  return (
    <div>
      <img src={caminho} alt="" />
    </div>
  );
}
