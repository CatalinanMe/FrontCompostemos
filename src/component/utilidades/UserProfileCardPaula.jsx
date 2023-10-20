import React from "react";
import "./UserProfileCard.css";
import profile_icon from "/Users/Cristian/Generation/ProyectoGrupo3/CompostemosReact/src/images/cat-paula.png";

export const UserProfileCard1 = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Paula Flores</div>
        <div className="profile-description">Scrum Master</div>
        <div className="profile-button">
          <a href="mailto:paulafloresgnz@gmail.com">Contáctame!</a>
        </div>
      </div>
    </div>
  );
};
