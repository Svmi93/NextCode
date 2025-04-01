import React from "react";
import "./accueil.css";

function Accueil() {
  return (
    <div className="container">
      <h1 className="title">Un Apprentissage Immersif</h1>
      <p className="para1">
        Apprends en pratiquant et en collaborant avec des experts du domaine
        pour maîtriser les compétences clés.
      </p>

      <div className="container2">
        {/* Bloc 1 */}
        <div className="content-block">
          <img
            src={require("../images/original.webp")}
            alt="Collaboration avec des experts"
            className="img"
          />
          <p className="para">
            💡 Nos formations sont basées sur des exercices pratiques et des
            études de cas réels pour maximiser ton apprentissage.
          </p>
          <img src={require("../images/time.webp")}
            alt=" temps"
            className="img"
          />
          <p className="para">
            📆 Apprends quand tu veux, où tu veux, avec un accès 24/7 aux
            ressources pédagogiques et aux supports de cours.
          </p>
          <img src={require("../images/globe_PNG63.webp")}
            alt="globe"
            className="img"
          />
          <p className="para">
            🌍 Rejoins une communauté d’apprenants et échange avec des mentors
            expérimentés pour progresser plus rapidement.
          </p>
        </div>

        {/* Bloc Technologies */}
        <div className="image-block">
          {/* Python */}
          <div className="content-block">
            <img
              src={require("../images/python.webp")}
              alt="Apprentissage de Python"
              className="img"
            />
            <p className="para">
              (Facile à apprendre, utilisé en IA et développement web)
            </p>
          </div>

          {/* JavaScript */}
          <div className="content-block">
            <img
              src={require("../images/javascript-logo-javascript-icon-transparent-free-png.webp")}
              alt="JavaScript en développement web"
              className="img"
            />
            <p className="para">(Essentiel pour le développement web)</p>
          </div>

          {/* SQL */}
          <div className="content-block">
            <img
              src={require("../images/database.webp")}
              alt="Base de données et SQL"
              className="img"
            />
            <p className="para">SQL for Data Science – Next Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
