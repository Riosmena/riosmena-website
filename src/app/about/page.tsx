"use client";

import { useState } from "react";
import Image from "next/image";
import "./styles.css";

interface Card {
  image: string;
  title: string;
  date: string;
  description: string;
}

interface Skill {
  name: string;
  characteristics: string[];
}

const certifications: Card[] = [
  {
    image: "/images/others/NVIDIA.png",
    title: "NVIDIA Deep Learning Institute",
    date: "Agosto 2024",
    description: "Certificación en Deep Learning con NVIDIA.",
  },
  {
    image: "/images/others/TOEFL.png",
    title: "TOEFL iBT",
    date: "Marzo 2024",
    description: "Certificación en inglés B2 en el examen TOEFL.",
  },
  {
    image: "/images/others/linkedin.png",
    title: "Speaking Confidently and Effectively",
    date: "Julio 2023",
    description: "Certificación en habilidades de comunicación.",
  },
];

const techskills: Skill[] = [
  {
    name: "Programación",
    characteristics: [
      "Python",
      "Java",
      "C",
      "C++",
      "Javascript",
      "Typescript",
      "Perl",
      "Dxl",
      "Bash",
      "R",
      "Matlab",
      "C#",
      "Html",
      "Css",
      "Sql",
      "Php",
      "Kotlin",
      "Swift",
    ],
  },
  {
    name: "Marcos de trabajo",
    characteristics: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "Flask",
      "Odoo",
    ],
  },
  {
    name: "Bases de datos",
    characteristics: ["MySQL", "MariaDB", "PostgreSQL", "DOORS"],
  },
  {
    name: "Herramientas",
    characteristics: [
      "Git",
      "GitHub",
      "AWS",
      "Docker",
      "Smartsheet",
      "Microsoft Office",
      "Unity",
      "Figma",
      "Visual Studio Code",
      "Android Studio",
      "Xcode",
    ],
  },
  {
    name: "Metodologías",
    characteristics: ["SCRUM", "CMMI", "Ágil", "Lean"],
  },
];

const softskills: Skill[] = [
  {
    name: "Comunicación",
    characteristics: [
      "Escucha activa",
      "Empatía",
      "Claridad",
      "Negociación",
      "Presentación",
    ],
  },
  {
    name: "Trabajo en equipo",
    characteristics: [
      "Liderazgo",
      "Colaboración",
      "Resolución de conflictos",
      "Comunicación efectiva",
    ],
  },
  {
    name: "Resolución de problemas",
    characteristics: [
      "Adaptabilidad",
      "Flexibilidad",
      "Organización",
      "Resiliencia",
    ],
  },
  {
    name: "Creatividad",
    characteristics: ["Pensamiento crítico", "Innovación", "Originalidad"],
  },
  {
    name: "Gestión del tiempo",
    characteristics: [
      "Organización",
      "Priorización",
      "Eficiencia",
      "Puntualidad",
    ],
  },
];

const languages: Skill[] = [
  {
    name: "Avanzado",
    characteristics: ["Español", "Inglés"],
  },
  {
    name: "Básico",
    characteristics: ["Italiano"],
  },
];

const About: React.FC = () => {
  const [tab, setTab] = useState<
    "professional" | "academic" | "certifications"
  >("professional");

  const handleTabChange = (
    tab: "professional" | "academic" | "certifications"
  ) => {
    setTab(tab);
  };

  const [tab2, setTab2] = useState<"technical" | "soft" | "languages">(
    "technical"
  );

  const handleSkillTabChange = (tab2: "technical" | "soft" | "languages") => {
    setTab2(tab2);
  };

  return (
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
            Comencé en el mundo del deporte a los 4 años, iniciando con el
            fútbol americano. Jugué por más de 16 años y fui campeón en dos
            ocasiones. Representé a México en competencias internacionales y
            formé parte de la selección nacional, logrando el segundo lugar en
            el torneo Pop Warner.
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
            la inteligencia artificial, y el desarrollo de videojuegos. Fuera
            del ámbito tecnológico, disfruto tocar música, hacer deporte, jugar
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

      <div className="columns">
        <section id="experience">
          <h3>Experiencia</h3>
          <div className="tabs">
            <button
              onClick={() => handleTabChange("professional")}
              className={tab === "professional" ? "active" : ""}
            >
              Profesional
            </button>
            <button
              onClick={() => handleTabChange("academic")}
              className={tab === "academic" ? "active" : ""}
            >
              Académica
            </button>
            <button
              onClick={() => handleTabChange("certifications")}
              className={tab === "certifications" ? "active" : ""}
            >
              Certificaciones
            </button>
          </div>

          <div className="cards">
            {tab === "professional" && (
              <div className="card">
                <Image
                  src="/images/others/GE.png"
                  alt="work icon"
                  width={150}
                  height={150}
                />
                <div className="card-content">
                  <h4>GE Aerospace</h4>
                  <span>Junio 2023 - Presente</span>
                  <p>
                    Becario de ingeniería de software en el equipo de Controles.
                    Automatización y creación de nuevas herramientas en Python y
                    Smartsheet.
                  </p>
                </div>
              </div>
            )}

            {tab === "academic" && (
              <div className="card">
                <Image
                  src="/images/others/Tec.png"
                  alt="school icon"
                  width={150}
                  height={150}
                />
                <div className="card-content">
                  <h4>Tecnológico de Monterrey</h4>
                  <span>Agosto 2021 - Presente</span>
                  <p>
                    Actualmente cursando la carrera de Ingeniería en Tecnologías
                    Computacionales en el Tecnológico de Moneterrey Campus
                    Querétaro. Fecha anticipada de graduación: Junio 2025
                  </p>
                </div>
              </div>
            )}

            {tab === "certifications" && (
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="card">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} icon`}
                      width={150}
                      height={150}
                    />
                    <div className="card-content">
                      <h4>{cert.title}</h4>
                      <span>{cert.date}</span>
                      <p>{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="skills">
          <h3>Habilidades</h3>
          <div className="tabs">
            <button
              onClick={() => handleSkillTabChange("technical")}
              className={tab2 === "technical" ? "active" : ""}
            >
              Técnicas
            </button>
            <button
              onClick={() => handleSkillTabChange("soft")}
              className={tab2 === "soft" ? "active" : ""}
            >
              Blandas
            </button>
            <button
              onClick={() => handleSkillTabChange("languages")}
              className={tab2 === "languages" ? "active" : ""}
            >
              Idiomas
            </button>
          </div>

          <div className="skills-cards">
            {tab2 === "technical" && (
              <div className="skills-list">
                {techskills.map((skill, index) => (
                  <div key={index} className="skill">
                    <h4>{skill.name}</h4>
                    <ul>
                      {skill.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {tab2 === "soft" && (
              <div className="skills-list">
                {softskills.map((skill, index) => (
                  <div key={index} className="skill">
                    <h4>{skill.name}</h4>
                    <ul>
                      {skill.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {tab2 === "languages" && (
              <div className="skills-list">
                {languages.map((skill, index) => (
                  <div key={index} className="skill">
                    <h4>{skill.name}</h4>
                    <ul>
                      {skill.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
