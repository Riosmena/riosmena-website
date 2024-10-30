import Image from "next/image";
import "./styles.css";

const Projects = () => {
  return (
    <div>
      <Image
        src="/images/icons/pc.png"
        alt="code icon"
        width={700}
        height={700}
        className="bg-image"
      />
      <section id="Projects">
        <div className="projects-text">
          <h2>
            <span>M</span>
            <span>i</span>
            <span>s</span>
            <span className="space"> </span>
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>y</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>o</span>
            <span>s</span>
          </h2>
        </div>

        <div className="projects-container">
          <div className="project-card-container">
            <article className="project-article">
              <Image
                src="/images/projects/Bullet-Hell.jpg"
                alt="Bullet-Hell Project"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Bullet-Hell</h3>
                <a
                  href="https://github.com/Riosmena/Bullet-Hell-Project"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Black-Dot.jpg"
                alt="Black Dot"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Black Dot</h3>
                <a
                  href="https://github.com/Black-Dot-2024"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Green-Circle.jpg"
                alt="Green Circle"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Green Circle</h3>
                <a
                  href="https://github.com/Iniciativa-Climatica-Mexico/Net-Zero-Citizens"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/cafeteria.jpg"
                alt="Cafe Simulator"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Cafe Simulator</h3>
                <a
                  href="https://github.com/Riosmena/Proyecto-C-"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/comunicaciones.jpeg"
                alt="Comms Simulator"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Comms Simulator</h3>
                <a
                  href="https://github.com/Riosmena/Simulador-de-comunicaciones-C-"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Smart-Shipping.jpg"
                alt="Smart Shipping"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Smart-Shipping</h3>
                <a
                  href="https://github.com/Riosmena/Proyecto_IoT"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/cs.jpg"
                alt="C# Lexer"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">C# Lexer</h3>
                <a
                  href="https://github.com/Riosmena/Resaltador-CS"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Systarch.jpg"
                alt="Systarch"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Systarch-Dispatch Health</h3>
                <a
                  href="https://github.com/dembA7/Systarch"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Number-Pop.jpg"
                alt="Number-Pop"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Number-Pop</h3>
                <a
                  href="https://github.com/Riosmena/Number-Pop"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Cars1.jpg"
                alt="Car Racing"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Car Racing</h3>
                <a
                  href="https://github.com/Riosmena/Car-Racing"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/SnakePy.jpg"
                alt="Snake"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Snake</h3>
                <a
                  href="https://github.com/Riosmena/Snake-CPP-Python"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Pong.jpg"
                alt="Pong"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Pong</h3>
                <a
                  href="https://github.com/Riosmena/Pong"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Cars1_5.jpg"
                alt="Car Racing 1.5"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Car Racing 1.5</h3>
                <a
                  href="https://github.com/Riosmena/Car-Racing-1.5"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Soccer.jpg"
                alt="Soccer"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Soccer</h3>
                <a
                  href="https://github.com/Riosmena/Soccer"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Cars2.jpg"
                alt="Car Racing 2"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Car Racing 2</h3>
                <a
                  href="https://github.com/Riosmena/Car-Racing-2"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Tetris.jpg"
                alt="Tetris"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Tetris</h3>
                <a
                  href="https://github.com/Riosmena/Tetris"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Rubiks.jpg"
                alt="Rubiks Cube"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Rubiks Cube</h3>
                <a
                  href="https://github.com/Riosmena/Rubiks-Cube"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/FPS.jpg"
                alt="First Person Shooter"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">First Person Shooter</h3>
                <a
                  href="https://github.com/Riosmena/First-Person-Shooter"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Cars3.jpg"
                alt="Car Racing 3"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Car Racing 3</h3>
                <a
                  href="https://github.com/Riosmena/Car-Racing-3"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/pokedex.jpg"
                alt="Pokedex"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Pokedex</h3>
                <a
                  href="https://github.com/Riosmena/PokedexApp"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Rappi.jpg"
                alt="Rappi Delivery"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Rappi Delivery</h3>
                <a
                  href="https://github.com/dvegaa20/Unity"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/gradient.jpg"
                alt="Descending Gradient"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Descending Gradient</h3>
                <a
                  href="https://github.com/Riosmena/Descending-Gradient"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/guitar.jpEg"
                alt="Chords"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">Music Chords CNN</h3>
                <a
                  href="https://github.com/Riosmena/Music-Chords-CNN"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>

            <article className="project-article">
              <Image
                src="/images/projects/Medic.jpg"
                alt="CNN for COVID-19"
                width={400}
                height={200}
                className="project-image"
              />

              <div className="card-data">
                <h3 className="project-title">CNN for COVID-19</h3>
                <a
                  href="https://github.com/Riosmena/Reto-IA"
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
