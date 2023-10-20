import React from "react";
import "./UserProfileCard.css";
import profile_icon from "/Users/Cristian/Generation/ProyectoGrupo3/CompostemosReact/src/images/cat-dani.jpg";

export const UserProfileCard3 = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Daniela Sobarzo</div>
        <div className="profile-description">Desarrolladora</div>
        <div className="profile-button">
          <a href="mailto:danielasobarzopino@gmail.com">Contáctame!</a>
        </div>
      </div>
    </div>
  );
};
