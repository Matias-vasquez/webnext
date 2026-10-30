interface Producto {
  imagen: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio_descuento: number;
  precio_nuevo: number;
  stock: number;
}

const formatoPrecio = (valor: number) =>
  valor === 0 ? "Gratis" : `$${valor.toLocaleString("es-CL")}`;
 
export default function ProductoV({ producto }: { producto: Producto }) {
  const { imagen, nombre, categoria, descripcion, precio_descuento, precio_nuevo, stock } = producto;
 
  return (
    <div className="card card-producto h-100">
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body d-flex flex-column">
        <span className="badge bg-secondary align-self-start mb-2">{categoria}</span>
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <div className="mt-auto">
          <div className="precio-descuento text-decoration-line-through">
            {formatoPrecio(precio_descuento)}
          </div>
          <div className="precio-nuevo fw-bold">{formatoPrecio(precio_nuevo)}</div>
          <small className="text-muted">Stock: {stock}</small>
        </div>
      </div>
      <div className="card-footer bg-transparent border-0 pb-3">
        <button className="btn btn-success w-100">
          Agregar
        </button>
      </div>
    </div>
  );
}
 