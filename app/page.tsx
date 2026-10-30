import ProductCard from "./componentes/ProductoV";
import { productos } from "./data/productos";

export const metadata = {
  title: "Inicio | Tienda de Videojuegos",
};

export default function HomePage() {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Productos</h2>
      <div className="row g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <ProductCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}