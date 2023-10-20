import React from "react";

export default function InicioSection() {
  return (
    <section className="inicio" id="inicio">
      <div className="banner">
        <img src="bannerDEF.png" alt="banner" width={"100%"} height={"100%"} />
      </div>

      <div className="row-banner">
        {/* <div className="figura1"> /}
        {/ <img src="platanot.png" alt="figura1" /> /}
        {/ </div>  /}
        {/ <div className="content-text">
          <div className="content">
            <h3>¡Compostemos!</h3>
            <span>
              Un panorama para cambiar el mundo: tú y yo, compostando.
            </span>
            <p></p>
            <a href="#" className="btn">
              Únete ahora
            </a>
          </div>
        </div> /}
      </div>
      <div className="fixed-image">
        <img src="/logito.png" alt="fixed-logo" className="fixed-logo" />

        {/ Resto del contenido de tu aplicación */}
      </div>
    </section>
  );
}
