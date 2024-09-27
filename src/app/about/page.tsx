import Image from "next/image";
import Typewriter from "../components/Typewriter";
import ServiceCard from "../components/ServiceCard";
import "./styles.css";

const About = () => (
  <div>
    <Image
      src="/images/icons/guitar.png"
      alt="code icon"
      width={700}
      height={700}
      className="bg-image"
    />
    <section id="about">
      <div className="me-images"></div>
      <div className="about-text">
        <h2>Acerca de mí</h2>
        <p>
          Mi nombre es José Riosmena y soy de Querétaro, México. Estudio
          Ingeniería en Tecnologías Computacionales en el Tecnológico de
          Monterrey, Campus Querétaro. Desde niño, la computación y la
          tecnología han capturado mi interés, y siempre me ha fascinado
          aprender sobre ellas y entender su funcionamiento.
        </p>
        <p>
          Comencé en el mundo del deporte a los 4 años, iniciando con el fútbol
          americano. Jugué por más de 16 años y fui campeón en dos ocasiones.
          Representé a México en competencias internacionales y formé parte de
          la selección nacional U-15, logrando el segundo lugar en el torneo Pop
          Warner.
        </p>
        <p>
          Me apasiona la música. Desde pequeño he tocado una variedad de
          instrumentos, como la guitarra, el bajo, la batería, el violín y el
          piano. Actualmente represento a mi institución como miembro de la
          compañía de músicos folclóricos, y también he sido parte de varias
          bandas de rock.
        </p>
        <p>
          Soy una persona creativa, apasionada y comprometida con lo que hago.
          Mis intereses incluyen el desarrollo de software, el desarrollo web,
          la inteligencia artificial, y el desarrollo de videojuegos. Fuera del
          ámbito tecnológico, disfruto tocar música, hacer deporte, jugar
          videojuegos y pasar tiempo con mi familia y amigos.
        </p>
        <div className="me-buttons">
          <button>
            <a href="/documents/cv.pdf" target="_blank" rel="noreferrer">
              Descargar mi currículum
            </a>
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default About;
