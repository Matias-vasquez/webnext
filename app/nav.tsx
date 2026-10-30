import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Navbar superior */}
      <nav className="navbar bg-body-tertiary navbar-superior">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              src="/img/icons8-game-controller-100.png"
              alt="Tienda de videojuegos"
              width={40}
              height={40}
              className="d-inline-block align-text-top"
            />
          </Link>

          <form className="d-none d-lg-flex navbar-search" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>

        </div>
      </nav>

      {/* Botón menú móvil */}
      <div className="text-center d-lg-none my-2">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMobileMenu"
          aria-controls="offcanvasMobileMenu"
        >
          <span className="navbar-toggler-icon"></span> Menú
        </button>
      </div>

      {/* Navbar inferior (solo pantallas grandes) */}
      <nav className="navbar bg-body-tertiary d-none d-lg-block">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav flex-row gap-3 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <a className="btn btn-success ms-5" href="#">
                <strong>Carrito <strong>$5.000</strong></strong>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}