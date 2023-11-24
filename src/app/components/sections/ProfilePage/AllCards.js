"use client";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import "material-icons/iconfont/material-icons.css";
import EpisodeCard from "../Episodes/EpisodeCard";

export function AllCards() {
  return (
    <div className="AllCards">
      <ul className="AllCardsMenu OnlyMobile">
        <li  className="AllCardsMenuItem">
          <a href="#">Episodios</a>
        </li>
        <li className="AllCardsMenuItemSelected">
          <a href="#">Contenido similar</a>
        </li>
      </ul>
      <div className="TitleAllCards">
          <span className="OnlyMobile material-icons">menu</span>
         <div className="AllCardsAllEpisodes">
          <h6 class="Title">Todos los episodios</h6>
          <span className="OnlyDesktop material-icons">keyboard_arrow_down</span>
          </div>
        <div className="AllCardsRecent">
          <h6 className="Title OnlyMobile">· Más recientes</h6>
          <h4 className="OnlyDesktop"> De más reciente a más antiguo</h4>
          <span className="OnlyDesktop material-icons">keyboard_arrow_down</span>
        </div>
      </div>
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
    </div>
  );
}
