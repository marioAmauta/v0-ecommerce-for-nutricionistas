import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NutriData",
  description:
    "Tu tienda especializada en equipos de medición antropométrica, cursos ISAK y recursos profesionales para nutricionistas.",
  generator: "v0.dev"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
