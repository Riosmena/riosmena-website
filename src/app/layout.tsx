import { FC, ReactNode } from "react";
import "./globals.css";
import { es } from "date-fns/locale";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 José Riosmena</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
