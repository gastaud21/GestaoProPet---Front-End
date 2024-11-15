import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          black: "#000000",
          menuSelecionado: "#6F8F97",
          bg: "#f7f3f8",
          menu: "#707070",
          bgHeader: "#2c2c2c",
          maisAcoes: "#6F8865",
          bloqueado: "#D4D4D4",
          table: "#757575",
          linetable: "#E0E0E0",
          filtro: {
            verde: "#6F8865",
            vinho: "7E6588",
            marrom: "#886C65",
            musgo: "#887F66",
          },
          botaoGG: "#648188",
          botaoGGHover: "#7598a1",
          inputBlocked: "#d4d4d4",
          login: {
            entrar: "#6F8865",
            checkbox: "#648188",
          },
          caixa: {
            Saida: "#FF4F23",
            Entrada: "#23D3FF",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
