import { FC, ReactNode } from "react";
import "./globals.css";
import { es } from "date-fns/locale";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <title>José Riosmena</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/about">Acerca de</a>
              </li>
              <li>
                <a href="/projects">Proyectos</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
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
