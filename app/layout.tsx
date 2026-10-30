import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./nav";
import BootstrapClient from "./bootstrap-client";

export const metadata = {
  title: "Tienda de Videojuegos",
  description: "Tienda online de videojuegos",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" data-bs-theme="dark">
      <body>
        <Navbar />
        <main>{children}</main>
        <BootstrapClient />
      </body>
    </html>
  );
}