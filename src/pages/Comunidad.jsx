import "./Comunidad.css";
import Emoji from "../images/emoji.png";
import Imagen from "../images/imagen.png";
import MeGusta from "../images/meGusta.png";
import Comentario from "../images/comentario.png";
import axios from "axios";
import { useEffect, useState } from "react";
import UserIcon from "../component/utilidades/UserIcon";

export default function Comunidad() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/post/lista/PorFecha",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="left-sidebar">
          <div className="imp-links">
            <a href="#">
              <i className="fa-solid fa-map"></i>Mapa
            </a>
            <a href="#">
              <i className="fa-solid fa-circle-info"></i>Foro informativo
            </a>
            <a href="#">
              <i className="fa-solid fa-user-group"></i>Amigos
            </a>
            <a href="#">Mostrar Más</a>
          </div>
        </div>

        <div className="main-content">
          <div className="escribir-post-container">
            <div className="user-profile">
              <img src="" alt="" />
              {/* avatar de la persona */}
              <div>
                <p>Carlos Sainz</p> {/* usename de la persona */}
                {/* quitar y ademas quitar .user-profile small en comunidad.css */}
              </div>
            </div>

            <div className="post-input-container">
              <textarea
                rows="3"
                placeholder="Que estas pensando, Carlos?"
              ></textarea>
              <div className="add-post-links">
                <a href="#">
                  <img src={Imagen} alt="" />
                  Foto/video
                </a>
                <a href="#">
                  <img src={Emoji} alt="" />
                  Emoji
                </a>
                <button className="post-button">Publicar</button>
              </div>
            </div>
          </div>
          {data.length && (
            <div className="post-container">
              {data.map((item) => (
                <div key={item.postId} className="post">
                  <div className="post-row">
                    <div className="user-profile">
                      <UserIcon nombre={item.usuarioNombre} />
                      <div>
                        <p>{item.usuarioNombre}</p>
                        <span>{item.createdAt}</span>
                      </div>
                    </div>
                    <a href="#"></a>
                  </div>
                  <p className="post-text">{item.postTexto}</p>
                  {/*<img
                    src={item.postImg}
                    className="post-img"
                    alt="Post Image"
              />*/}
                  <div className="post-row">
                    <div className="activity-icons">
                      <div>
                        <a href="#">
                          <img src={MeGusta} alt="" />
                        </a>
                        20
                      </div>
                      <div>
                        <a href="#">
                          <img src={Comentario} alt="" />
                        </a>
                        4
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="right-sidebar">
          <div className="sidebar-title">
            <h4>Eventos</h4>
            <a href="#">Ver todo</a>
          </div>
          <div className="evento">
            <div className="left-evento">
              <h3>6</h3>
              <span>Diciembre</span>
            </div>
            <div className="right-evento">
              <h4>Lanzamiento</h4>
              <p>Generation</p>
              <a href="#">Más información</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
