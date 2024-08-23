import Image from "next/image";
import Typewriter from "./components/Typewriter";

const Home = () => (
  <div>
    <Image
      src="/images/icons/guitar.png"
      alt="guitar icon"
      width={900}
      height={900}
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

    <section>
      <h2>About</h2>
      <p>
        I am a software engineer from Mexico. I love to learn new things and
        share knowledge with others.
      </p>
    </section>

    <section>
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="/projects/1">Project 1</a>
        </li>
        <li>
          <a href="/projects/2">Project 2</a>
        </li>
        <li>
          <a href="/projects/3">Project 3</a>
        </li>
      </ul>
    </section>

    <section>
      <h2>Contact</h2>
      <p>You can reach me at: </p>
    </section>
  </div>
);

export default Home;
