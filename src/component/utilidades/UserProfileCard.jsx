import React from "react";
import "./UserProfileCard.css";
import profile_icon from "/Users/Cristian/Generation/ProyectoGrupo3/CompostemosReact/src/images/cat-cris.jpeg";

export const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Cristian Vásquez</div>
        <div className="profile-description">Product Owner</div>
        <div className="profile-button">
          <a href="mailto:cristianjaureguiv@gmaill.com">Contáctame!</a>
        </div>
      </div>
    </div>
  );
};
