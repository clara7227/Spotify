"use client";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import "material-icons/iconfont/material-icons.css";
import Image from "next/image";


export function TopCard() {
   
  return (
    <div className="TopCardContainer">
      <div className="TopCardHeader">
        <div className="TopCardImgContainter">
        <Image
              src="/img/diseno-diaspora.png"
              width={120}
              height={120}
              alt="Picture of the author"
            />
        </div>
        <div className="TopCardMainInfo">
          <p>Pódcast</p>
          <h1>Diseño y Diáspora</h1>
          <h4>Mariana Salgado</h4>
        </div>
      </div>

      <div className="TopCardExtendedInfo">
        <div className="TopCardActions">
          <div className="TopCardButtons">
            <button className="FollowButton"> Seguir</button>

            <span class="OnlyDesktop material-icons" id="MoreButton">
              more_horiz
            </span>
            <span class="OnlyMobile material-icons-outlined" id="NotificationsButton">notifications</span>
            <span class="OnlyMobile material-icons-outlined" id="SettingsButton">settings</span>
            <span class="OnlyMobile material-icons" id="MoreVertButton">more_vert</span>
          </div>
        </div>
        <div className="TopCardDescriptionContainer">
          <h4 className="TopCardDescriptionInfo">Información</h4>
          <p className="TopCardDescription">
            Diseño y diáspora es un podcast sobre diseño social en castellano,
            portugués e inglés. La mayoría de los episodios son en castellano.
            El podcast ahonda, a través de las voces de diseñadores
            contemporáneos, temas emergentes como: participación ciudadana,
            inmigración, políticas públicas, salud, comunidades vulnerables,
            nuevas ruralidades, sostenibilidad, género y
          </p>
          <div className="CardDescriptionShowMore"><b>Mostrar más</b></div>
       
        </div>
        <div className="TopCardTags">
          <div className="Tag" id="TagStars">
            4,9
            <span class="material-icons">star_outline</span>
            (78){" "}
          </div>
          <div className="Tag" id="TagLanguageLevel">
            Spanish B2
          </div>
          <div className="Tag" id="TagTopic">
            Arquitectura
          </div>
        </div>
      </div>
    </div>
  );
}
