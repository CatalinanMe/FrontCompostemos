import React from "react";
import "./UserProfileCard.css";
import profile_icon from "/Users/Cristian/Generation/ProyectoGrupo3/CompostemosReact/src/images/cat-fran2.jpg";

export const UserProfileCard2 = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Francisca Ruz</div>
        <div className="profile-description">Desarrolladora</div>
        <div className="profile-button">
          <a href="mailto:fpazruzvergara@gmail.com">Contáctame!</a>
        </div>
      </div>
    </div>
  );
};
