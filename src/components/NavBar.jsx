import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function NavBar() {
  const [usuario, setUsuario] = useState(localStorage.getItem("usuario"));

  console.log(usuario);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  activeClassName="active-link"
                  className="nav-link"
                  aria-current="page"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/juegos"
                  activeClassName="active-link"
                  className="nav-link"
                  aria-current="page"
                >
                  Juegos
                </NavLink>
              </li>
            </ul>

            {usuario === null || usuario === "" ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    activeClassName="active-link"
                    className="nav-link"
                    aria-current="page"
                  >
                    Iniciar sesion
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      style={{
                        verticalAlign: "middle",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="Avatar"
                      class="avatar"
                    />{" "}
                    Usuario
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-lg-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        activeClassName="selected"
                        className="dropdown-item"
                        to="/perfil"
                      >
                        Perfil
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="selected"
                        className="dropdown-item"
                        to="/historial"
                      >
                        Historial
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cerrar session
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
