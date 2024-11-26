"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import "./styles.css";

const Contact = () => {
  return (
    <div>
      <Image
        src="/images/icons/contact.png"
        alt="Contact"
        width={750}
        height={700}
        className="bg-image"
      />
      <section id="contact">
        <div className="contact-container">
          <p>Vamos a crear algo juntos</p>
          <div className="contact-title">
            <h2>
              <span>¡</span>
              <span>E</span>
              <span>n</span>
              <span>v</span>
              <span>í</span>
              <span>a</span>
              <span>m</span>
              <span>e</span>
              <span className="space"> </span>
              <span>u</span>
              <span>n</span>
              <span className="space"> </span>
              <span>m</span>
              <span>e</span>
              <span>n</span>
              <span>s</span>
              <span>a</span>
              <span>j</span>
              <span>e</span>
              <span>!</span>
            </h2>
          </div>
          <div className="columns">
            <section id="contact-info">
              <div className="info">
                <h3>Información de contacto</h3>
                <p>
                  <i className="fas fa-map-marker-alt"></i> México
                </p>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  correo_de_emiliano@yahoo.com.mx
                </p>
                <p>
                  <i className="fas fa-phone"></i> (+52) 442 219 9302
                </p>
              </div>

              <div className="info">
                <h3>Redes sociales</h3>
                <div className="social-buttons">
                  <a
                    href="https://www.instagram.com/panda_608755"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                  <a
                    href="https://github.com/riosmena"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/josé-emiliano-riosmena-castañón-286009251"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </section>

            <section id="contact-form">
              <div className="contact-form-container">
                <h3>Contactar</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Tu correo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Asunto</label>
                    <input
                      type="text"
                      id="topic"
                      name="topic"
                      placeholder="Asunto del mensaje"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tu mensaje"
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Enviar
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
