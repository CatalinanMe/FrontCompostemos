import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Links</h3>
          <a href="#">Inicio</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">La Comunidad</a>
          <a href="#">Educación</a>
        </div>
        <div className="box">
          <h3>Extra links</h3>
          <a href="#">Mi cuenta</a>
          <a href="#">La Comunidad</a>
          <a href="#">Mapa Compost</a>
        </div>
        <div className="box">
          <h3>Contacto</h3>
          <a href="mailto:compostemos@comp.com">compostemos@comp.com</a>
          <img src="" alt="" />
        </div>
      </div>
      <div className="credit">&copy; Compostemos</div>
    </section>
  );
}
