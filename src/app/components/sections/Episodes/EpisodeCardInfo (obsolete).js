"use client";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import "material-icons/iconfont/material-icons.css";

function EpisodeCardInfo() {
  return (
    <div className="CardDescription">
      <div className="SmallTitle" id="NextTag">A continuación</div>
      <div className="Title">
        <div className="NotificationNew"> O</div>
        <h6>
          {" "}
          465. JUEGOS 1. Lúdicos anónimos (España). Una charla con Paqui
          Calderón
        </h6>
        </div>
        <div className="SmallTitle">Diseño y Diáspora</div>
        <div className="SmallTitle" id="DescriptionTag">
          Paqui Calderón, Lucía Morate Benito, Gloria Jimenez Costa y Darío
          Pascual participan de un espacio de introspección, reflexión y
          socialización a través del juego. En esta charla nos cuentan como se
          relacionan con el juego desde sus diferentes profesiones, porqué son
          parte de este espacio y cómo es la experiencia de jugar juntes.
        </div>
      
      <div className="CardButtonContainer">
        <div className="PlayButton">
          <span class="material-icons">play_circle</span>
        </div>
        <div className="SmallTitle">9 nov · 56 min 16 s </div>
      </div>
  </div>
  );
}
export default EpisodeCardInfo;
