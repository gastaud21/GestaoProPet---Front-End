import type { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gestao Pro Pet",
  description: "ERP para gestão de abrigo de animais público",
  keywords: [
    "abrigo",
    "animais",
    "abrigo de animais",
    "vira lata",
    "animal de rua",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt'br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       
          {children}
        
      </body>
    </html>
  );
}
