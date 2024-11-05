"use client";

import Image from "next/image";
import { useState } from "react";
import "./styles.css";

const projects = [
  {
    title: "Bullet-Hell",
    image: "/images/projects/Bullet-Hell.jpg",
    alt: "Bullet-Hell Project",
    link: "https://github.com/Riosmena/Bullet-Hell-Project",
  },
  {
    title: "Black Dot",
    image: "/images/projects/Black-Dot.jpg",
    alt: "Black Dot",
    link: "https://github.com/Black-Dot-2024",
  },
  {
    title: "Green Circle",
    image: "/images/projects/Green-Circle.jpg",
    alt: "Green Circle",
    link: "https://github.com/Iniciativa-Climatica-Mexico/Net-Zero-Citizens",
  },
  {
    title: "Cafe Simulator",
    image: "/images/projects/cafeteria.jpg",
    alt: "Cafe Simulator",
    link: "https://github.com/Riosmena/Proyecto-C-",
  },
  {
    title: "Comms Simulator",
    image: "/images/projects/comunicaciones.jpeg",
    alt: "Comms Simulator",
    link: "https://github.com/Riosmena/Simulador-de-comunicaciones-C-",
  },
  {
    title: "Smart Shipping",
    image: "/images/projects/Smart-Shipping.jpg",
    alt: "Smart Shipping",
    link: "https://github.com/Riosmena/Proyecto_IoT",
  },
  {
    title: "C# Lexer",
    image: "/images/projects/cs.jpg",
    alt: "C# Lexer",
    link: "https://github.com/Riosmena/Resaltador-CS",
  },
  {
    title: "Systarch-Dispatch Health",
    image: "/images/projects/Systarch.jpg",
    alt: "Systarch",
    link: "https://github.com/dembA7/Systarch",
  },
  {
    title: "Number-Pop",
    image: "/images/projects/Number-Pop.jpg",
    alt: "Number-Pop",
    link: "https://github.com/Riosmena/Number-Pop",
  },
  {
    title: "Car Racing",
    image: "/images/projects/Cars1.jpg",
    alt: "Car Racing",
    link: "https://github.com/Riosmena/Car-Racing",
  },
  {
    title: "Snake",
    image: "/images/projects/SnakePy.jpg",
    alt: "Snake",
    link: "https://github.com/Riosmena/Snake-CPP-Python",
  },
  {
    title: "Pong",
    image: "/images/projects/Pong.jpg",
    alt: "Pong",
    link: "https://github.com/Riosmena/Pong",
  },
  {
    title: "Car Racing 1.5",
    image: "/images/projects/Cars1_5.jpg",
    alt: "Car Racing 1.5",
    link: "https://github.com/Riosmena/Car-Racing-1.5",
  },
  {
    title: "Soccer",
    image: "/images/projects/Soccer.jpg",
    alt: "Soccer",
    link: "https://github.com/Riosmena/Soccer",
  },
  {
    title: "Car Racing 2",
    image: "/images/projects/Cars2.jpg",
    alt: "Car Racing 2",
    link: "https://github.com/Riosmena/Car-Racing-2",
  },
  {
    title: "Tetris",
    image: "/images/projects/Tetris.jpg",
    alt: "Tetris",
    link: "https://github.com/Riosmena/Tetris",
  },
  {
    title: "Rubiks Cube",
    image: "/images/projects/Rubiks.jpg",
    alt: "Rubiks Cube",
    link: "https://github.com/Riosmena/Rubiks-Cube",
  },
  {
    title: "First Person Shooter",
    image: "/images/projects/FPS.jpg",
    alt: "First Person Shooter",
    link: "https://github.com/Riosmena/First-Person-Shooter",
  },
  {
    title: "Car Racing 3",
    image: "/images/projects/Cars3.jpg",
    alt: "Car Racing 3",
    link: "https://github.com/Riosmena/Car-Racing-3",
  },
  {
    title: "Pokedex",
    image: "/images/projects/pokedex.jpg",
    alt: "Pokedex",
    link: "https://github.com/Riosmena/PokedexApp",
  },
  {
    title: "Rappi Delivery",
    image: "/images/projects/Rappi.jpg",
    alt: "Rappi Delivery",
    link: "https://github.com/dvegaa20/Unity",
  },
  {
    title: "Descending Gradient",
    image: "/images/projects/gradient.jpg",
    alt: "Descending Gradient",
    link: "https://github.com/Riosmena/Descending-Gradient",
  },
  {
    title: "Music Chords CNN",
    image: "/images/projects/guitar.jpEg",
    alt: "Chords",
    link: "https://github.com/Riosmena/Music-Chords-CNN",
  },
  {
    title: "CNN for COVID-19",
    image: "/images/projects/Medic.jpg",
    alt: "CNN for COVID-19",
    link: "https://github.com/Riosmena/Reto-IA",
  },
  {
    title: "Cow Classification",
    image: "/images/projects/cows.jpg",
    alt: "Cow-GPT",
    link: "https://github.com/salgue441/cow-project",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
            {currentProjects.map((project, index) => (
              <article key={index} className="project-article">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={200}
                  className="project-image"
                />
                <div className="card-data">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Ver más
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pagination-controls">
          <button onClick={prevPage} disabled={currentPage === 1}>
            ←
          </button>
          <span>
            {currentPage} / {Math.ceil(projects.length / projectsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(projects.length / projectsPerPage)
            }
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
