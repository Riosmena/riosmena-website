"use client";

import { FC, ReactNode, useState } from "react";
import "./globals.css";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="es">
      <head>
        <title>José Riosmena</title>
      </head>
      <body>
        <header>
          <nav>
            <button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>

            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <li>
                <a href="/" onClick={() => setIsMenuOpen(false)}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="/about" onClick={() => setIsMenuOpen(false)}>
                  Acerca de
                </a>
              </li>
              <li>
                <a href="/projects" onClick={() => setIsMenuOpen(false)}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </a>
              </li>
            </ul>
            <div className="lang">
              <a href="#change-language">ES</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
