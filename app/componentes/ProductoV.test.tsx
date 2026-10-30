import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "../page";
import { productos } from "../data/productos";

const formatoPrecio = (valor: number) =>
  valor === 0 ? "Gratis" : `$${valor.toLocaleString("es-CL")}`;

describe("tarjetas de productos", () => {
  it("muestra una tarjeta completa por cada producto", () => {
    render(<HomePage />);

    expect(screen.getAllByRole("button", { name: "Agregar" })).toHaveLength(
      productos.length,
    );

    for (const producto of productos) {
      const titulo = screen.getByRole("heading", {
        level: 5,
        name: producto.nombre,
      });
      const tarjeta = titulo.closest<HTMLElement>(".card-producto");

      expect(tarjeta).not.toBeNull();
      if (!tarjeta) {
        throw new Error(`No se encontró la tarjeta de ${producto.nombre}`);
      }

      const contenido = within(tarjeta);

      expect(
        contenido.getByRole("img", { name: producto.nombre }).getAttribute("src"),
      ).toBe(producto.imagen);
      expect(contenido.getByText(producto.categoria)).toBeTruthy();
      expect(contenido.getByText(producto.descripcion)).toBeTruthy();
      expect(contenido.getByText(formatoPrecio(producto.precio_descuento))).toBeTruthy();
      expect(contenido.getByText(formatoPrecio(producto.precio_nuevo))).toBeTruthy();
      expect(contenido.getByText(`Stock: ${producto.stock}`)).toBeTruthy();
      expect(contenido.getByRole("button", { name: "Agregar" })).toBeTruthy();
    }
  });
});
