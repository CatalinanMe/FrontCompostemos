import React from "react";
import "./EducacionSection.css";
import AprendamosCompost from "../images/tae-compost.png";
import TiposCompost from "../images/tipos-compost.png";
import MitosCompost from "../images/jimin-compost.png";
import LocalCompost from "../images/logos/localcompost.png";
import SrCompost from "../images/logos/srcompost.png";
import NosCompostamos from "../images/logos/noscompostamos.jpg";
import Compostina from "../images/logos/compostina.jpg";
export default function Educacion() {
  return (
    <div className="container-educacion">
      <div className="intro" id="intro">
        <div className="intro-content">
          <h3>APRENDAMOS SOBRE COMPOSTAJE</h3>
          <h2>Todo lo que necesitas para comenzar</h2>
          <p>
            Si eres nuevo en el mundo del compostaje, probablemente tengas
            muchas dudas. ¡Resuélvelas aquí! A continuación te hablaremos sobre
            qué es, qué tipos existen, desmentiremos algunos mitos y te daremos
            tips para comenzar.
          </p>
          <div className="image-container">
            <img
              src={AprendamosCompost}
              alt="Descripción de la imagen"
              className="intro-image"
            />
          </div>
        </div>
      </div>
      <div className="intro" id="intro">
        <div className="intro-content">
          <h3>¿QUÉ ES EL COMPOSTAJE?</h3>
          <h2>Y por qué debería importarte</h2>
          <p>
            El compostaje es un proceso de transformación de la materia orgánica
            para obtener compost, un abono natural. Esta práctica adquiere suma
            importancia considerando que la basura diaria que se genera en los
            hogares contiene un 50% de materia orgánica. Al reciclar los
            residuos orgánicos se contribuye a la reducción de los desechos
            destinados a rellenos sanitarios, mitigando así el Cambio Climático.
          </p>
          <p>Los dos tipos principales son:</p>
          <p>
            <h1>1. Tradicional</h1>En esta se mezclan todo tipo de desechos
            orgánicos y se les “voltea” cada cierto tiempo con una pala o alguna
            otra máquina; dependiendo de la cantidad que se esté produciendo.
            Según su materia prima, las dificultades de hacerla cambiarán,
            aunque sigue siendo usado con bastante frecuencia.
            <h1>2. Humus</h1>A una composta estándar se le agregan lombrices de
            tierra. Mientras se vayan comiendo la tierra donde están, crean
            humus en dos formas: sólido y líquido. Por eso, también se le
            comercializa con el nombre de humus de lombriz. Los beneficios de la
            composta, en general, es que genera una nutrición homogénea.
          </p>
        </div>

        <div className="image-container">
          <img
            src={TiposCompost}
            alt="Descripción de la imagen"
            className="intro-image"
          />
        </div>
      </div>

      <div className="intro" id="intro">
        <div className="intro-content">
          <h3>DESMINTIENDO MITOS</h3>
          <h2>Para que le pierdas el miedo al compostaje</h2>
          <p>
            <h1>Mito # 1: El compostaje genera malos olores. </h1> El compostaje
            siempre y cuando se lleve a cabo adecuadamente no debe de emanar
            malos olores, más bien debe oler como a tierra fértil o a la riqueza
            de un bosque.
          </p>
          <p>
            <h1>Mito # 2: Hay que echarle tierra a la compostera</h1> A la
            compostera lo único que se le debe añadir son los residuos orgánicos
            como restos de frutas, verduras y hortalizas y materiales secantes
            como comprimidos de aserrín, papel y cartón.
          </p>
          <p>
            <h1>
              Mito # 3: Se ocupa de mucho espacio para poder hacer compostaje
            </h1>
            En el pasado era común que el compostaje fuera una práctica
            exclusiva de fincas u hogares con un jardín espacioso. Por suerte
            existen alternativas como las composteras giratorias o las cajas de
            takakura, las cuales permiten hacer compostaje en un espacio menor a
            1 m2.
          </p>
          <p>
            <h1>Mito # 4: El compost atrae ratones y moscas</h1> Siempre y
            cuando dejemos en nuestra compostera cerrada de la manera correcta y
            nos preocupemos de dejar solo desechos orgánicos -nada de carne- no
            tendrían porque llegar roedores. En el caso de las moscas, esto
            ocurre si es que existe un exceso de comida o cuando hay comida
            descompuesta, pero es fácil de solucionar: se puede agregar papel
            picado para reducir la humedad y así no atraer moscas.
          </p>
          <div className="image-container">
            <img
              src={MitosCompost}
              alt="Descripción de la imagen"
              className="intro-image"
            />
          </div>
        </div>
      </div>
      <div className="intro" id="intro">
        <div className="intro-content">
          <div className="intro" id="intro">
            <div className="intro-content">
              <h3>¿CÓMO PUEDO COMENZAR?</h3>
              <h2>Te invitamos a conocer nuestras organizaciones socias</h2>
              <div className="socios">
                <p>
                  <a
                    href="https://localcompost.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={LocalCompost} alt="LocalCompost" />
                  </a>
                </p>
                <p>
                  <a
                    href="https://compostina.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Compostina} alt="Compostina" />
                  </a>
                </p>
                <p>
                  <a
                    href="https://srcompost.cl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={SrCompost} alt="Compost Chile" />
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.noscompostamosbien.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={NosCompostamos} alt="Nos Compostamos Bien" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
