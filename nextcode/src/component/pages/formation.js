import React from "react";
import "./formation.css";

const Formation = () => {
    return (
        <main class="wrapper">
    <section class="card">
      <h1>Ce que vous allez apprendre</h1>
      <div class="content-grid">
        <ul>
          <li>Comprendre la structure HTML</li>
          <li>Créer des pages web complètes</li>
          <li>Insérer images, vidéos et liens</li>
        </ul>
        <ul>
          <li>Styliser vos pages avec CSS</li>
          <li>Utiliser Flexbox pour les layouts</li>
          <li>Créer des designs responsives</li>
        </ul>
      </div>
    </section>

    <section class="card">
      <h2>Prérequis</h2>
      <ul class="requirements">
        <li>Savoir utiliser un PC</li>
        <li>Connaître un éditeur de texte</li>
        <li>Utiliser un navigateur</li>
      </ul>
    </section>
    <section class="card purchase">
  <h2>Accédez à la formation complète</h2>
  <p class="desc">
    Apprenez à créer des sites web modernes de A à Z grâce à cette formation HTML & CSS complète.
  </p>
  <div class="price-block">
    <span class="price">49€</span>
    <button class="btn-buy">Acheter la formation</button>
  </div>
</section>

  </main>
    );
    }
export default Formation;
