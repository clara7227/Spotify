"use client";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import "material-icons/iconfont/material-icons.css";
import Image from "next/image";

function EpisodeCard() {
  return (
    <div className="EpisodeCard">
      <div className="CardImgContainer">
        <div className="CardImg">
          <Image
            src="/img/diseno-diaspora.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="CardInfoContainer">
        <div className="CardDescription">
          <div className="SmallTitle" id="NextTag">
            Último episodio
          </div>
          <div className="Title">
            <div className="NotificationNew"> </div>
            <h6>
              {" "}
              465. JUEGOS 1. Lúdicos anónimos (España). Una charla con Paqui
              Calderón, Lucía Morate Benito, Gloria Jimenez Costa
            </h6>
          </div>
          <div className="SmallTitle OnlyDesktop" id="TitleProgram" >Diseño y Diáspora</div>
          <div className="SmallTitle" id="DescriptionTag">
            Paqui Calderón, Lucía Morate Benito, Gloria Jimenez Costa y Darío
            Pascual participan de un espacio de introspección, reflexión y
            socialización a través del juego. En esta charla nos cuentan como se
            relacionan con el juego desde sus diferentes profesiones, porqué son
            parte de este espacio y cómo es la experiencia de jugar juntes.
          </div>

          <div className="CardButtonContainerDesktop OnlyDesktop">
            <div className="PlayButton">
              <span className="material-icons">play_circle</span>
            </div>
            <div className="SmallTitle">9 nov · 56 min 16 s </div>
            <div className="CardButtonContainerActions">
              <span className="material-icons">share</span>
              <span className="material-icons">arrow_circle_down</span>
              <span className="material-icons">add_circle_outline</span>
              <span className="material-icons">more_horiz</span>
            </div>
          </div>
          <div className="CardButtonContainerMobile OnlyMobile">
            <div className="SmallTitle">9 nov · 56 min 16 s </div>
            <div className="CardButtonGroup">
              <div>
                <span className="material-icons">add_circle_outline</span>
                <span className="material-icons">arrow_circle_down</span>
                <span className="material-icons">share</span>
                <span className="material-icons">more_vert</span>
              </div>
              <div className="PlayButton">
                <span className="material-icons">play_circle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*SOLO MÓVIL*/}
     {/** <span class="OnlyMobile material-icons" id="MoreVertButton">
        more_vert
      </span>*/} 
    </div>
  );
}
export default EpisodeCard;
