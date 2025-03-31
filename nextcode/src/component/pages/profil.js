import React from "react";
import "./profil.css";

const Profil = () => {
  return (
    <div>
      <div class="profil">
        <img src={require("../../images/user.png")} alt="user" />
        <div class="profil-info">
          <div class="profil-info-name">
            <h3>Naruto</h3>
            <h3>Yagami</h3>
          </div>
          <h3>31 ans</h3>
        </div>
      </div>

      <div class="progress">
        <h2>Progression par formation</h2>

        <div class="progress-container">
          <img src={require("../../images/logoJs.png")} alt="user" />
          <img src={require("../../images/logoHtml.png")} alt="user" />
          <img src={require("../../images/logoReact.png")} alt="user" />
          <img src={require("../../images/logoCsharp.png")} alt="user" />
          <img src={require("../../images/logoGit.png")} alt="user" />
          <img src={require("../../images/logoCss.png")} alt="user" />
          <img src={require("../../images/logoPython.png")} alt="user" />
          <img src={require("../../images/logoDocker.png")} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
