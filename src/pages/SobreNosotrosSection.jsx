import { UserProfileCard } from "../component/utilidades/UserProfileCard";
import { UserProfileCard1 } from "../component/utilidades/UserProfileCardPaula";
import { UserProfileCard2 } from "../component/utilidades/UserProfileCardFrancisca";
import { UserProfileCard3 } from "../component/utilidades/UserProfileCardDaniela";
import { UserProfileCard4 } from "../component/utilidades/UserProfileCardCatalina";
import "./SobreNosotros.css";

export default function SobreNosotrosSection() {
  return (
    <section className="sobre-nosotros" id="sobre-nosotros">
      <h1 className="titulo">
        Sobre <span>Nosotros</span>
      </h1>
      <div className="card-container">
        <div className="card1">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un grupo de 5 personas apasionadas por el compostaje y la
            sostenibilidad. Cada uno aportó una perpectiva unica y habilidades
            distinas para llevar acabo esta app web, que fue creada con mucha
            dedicación y esfuerzo, para formar una nueva generación.
          </p>
        </div>
        <div className="card2"></div>
        <div className="card3"></div>
        <div className="card4">
          <h2>Visión</h2>
          <p>
            Nuestra visión en Compostemos.cl es la de ser un catalizador para un
            mundo más sostenible. Visualizamos un futuro en el que el compostaje
            sea una práctica común y esencial en cada hogar y comunidad.
          </p>
        </div>
        <div className="card5">
          <h2>Misión</h2>
          <p>
            Nuestro misión es promover el compostaje como una forma simple de
            reducir residuos y enriquecer la tierra. Proporcionamos recursos y
            apoyo para que las personas adopten el compostaje en su vida
            cotidiana y fomentamos una comunidad comprometida con la
            sostenibilidad.
          </p>
        </div>
        <div className="card6"></div>
      </div>

      <div className="tarjetas">
        <UserProfileCard />
        <UserProfileCard1 />
        <UserProfileCard2 />
        <UserProfileCard3 />
        <UserProfileCard4 />
      </div>
    </section>
  );
}
