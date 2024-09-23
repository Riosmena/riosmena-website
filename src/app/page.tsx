import Image from "next/image";
import Typewriter from "./components/Typewriter";
import ServiceCard from "./components/ServiceCard";

const Home = () => (
  <div>
    <Image
      src="/images/icons/codigo.png"
      alt="code icon"
      width={700}
      height={700}
      className="bg-image"
    />
    <section id="introduction">
      <div className="text-container">
        <h4>
          <span>Y</span>
          <span>o</span>
          <span className="space"> </span>
          <span>s</span>
          <span>o</span>
          <span>y</span>
        </h4>
        <h1>
          <span>J</span>
          <span>o</span>
          <span>s</span>
          <span>é</span>
          <span className="space"> </span>
          <span>R</span>
          <span>i</span>
          <span>o</span>
          <span>s</span>
          <span>m</span>
          <span>e</span>
          <span>n</span>
          <span>a</span>
        </h1>
        <div id="typewriter">
          <span>
            <Typewriter
              texts={[
                "Ingeniero de Software",
                "Atleta",
                "Músico",
                "Entusiasta de la tecnología",
              ]}
              speed={100}
              delay={2000}
            />
          </span>
        </div>
      </div>
      <div className="image-container">
        <Image
          src="/images/hero.jpg"
          alt="Profile picture"
          width={500}
          height={500}
          className="center-image"
        />
      </div>
    </section>
    <br></br>
    <section id="about">
      <div className="me-images"></div>
      <div className="about-text">
        <h2>Sobre mí</h2>
        <p>
          Soy un estudiante de ingeniería de software, me apasiona la tecnología
          y su desarrollo. Me enfrento a nuevos retos con mucho entusiasmo y
          dedicación para aprender y mejorar cada día. Soy muy creativo y me
          gusta implementar nuevas ideas con mucha motivación hacia la
          tecnología, la música y los videojuegos. Me gustan mucho los deportes
          y la música.
        </p>
        <div className="me-buttons">
          <button>
            <a href="/about">Saber más</a>
          </button>
          <button>
            <a href="/documents/cv.pdf" target="_blank" rel="noreferrer">
              Descargar mi currículum
            </a>
          </button>
        </div>
      </div>
    </section>

    <section id="Technology">
      <div className="tech-text">
        <h2>
          <span>T</span>
          <span>e</span>
          <span>c</span>
          <span>n</span>
          <span>o</span>
          <span>l</span>
          <span>o</span>
          <span>g</span>
          <span>í</span>
          <span>a</span>
          <span>s</span>
        </h2>
      </div>
      <div className="services-container">
        <ServiceCard
          title="Desarrollo Web"
          shortDescription="Desarrollo de sitios web modernos y responsivos."
          tools={[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
          ]}
        />
        <ServiceCard
          title="Aprendizaje Automático"
          shortDescription="Creación de modelos predictivos y análisis de datos."
          tools={[
            "Python",
            "TensorFlow",
            "Keras",
            "Scikit-learn",
            "Pandas",
            "Numpy",
            "PyTorch",
          ]}
        />
        <ServiceCard
          title="Desarrollo de Videojuegos"
          shortDescription="Desarrollo de videojuegos en 2D y 3D."
          tools={["Unity", "C#", "Blender", "Unreal Engine", "Ursina"]}
        />
        <ServiceCard
          title="DevOps"
          shortDescription="Automatización de infraestructuras y despliegue continuo."
          tools={["Docker", "Git", "GitHub", "AWS"]}
        />
      </div>
    </section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <section id="Projects">
      <div className="projects-text">
        <h2>
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

      <div className="projects-button">
        <button>
          <a href="/projects">Ver todos</a>
        </button>
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
        </div>
      </div>
    </section>

    <section>
      <h2>Contact</h2>
      <p>You can reach me at: </p>
    </section>
  </div>
);

export default Home;
