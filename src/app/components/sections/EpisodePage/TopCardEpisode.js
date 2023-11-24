"use client";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
 import 'bootstrap/scss/bootstrap.scss';
 import 'material-icons/iconfont/material-icons.css';


function TopCardEpisode() {
  return (   
      <div className="TopCardContainer">
        <div className="TopCardHeader">
            <div className="TopCardImgContainter"> 
            <img></img>Top Card Img
            </div>
            <div className="TopCardMainInfo">
                <p>Episodio de Pódcast</p>
                <h2>464. EL Diseño como catalizador de otras cosas (España). Una charla con Curro Claret Martí</h2>
                <h4>Diseño y Diáspora</h4>
            </div>
        </div>
     
        <div className="TopCardExtendedInfo">
            <div className="TopCardActions">
                <p className="EpisodeDate">9 nov · 56 min 17 s</p>
                <div className="TopCardButtons"> 
                    <div className="PlayButton">
                    <span class="material-icons">play_circle</span> 
                    </div>
                    <div className="DownloadButton">
                    <span class="material-icons">arrow_circle_down</span> 
                    </div>
                    <div className="NewButton">
                    <span class="material-icons">add_circle_outline</span> 
                    </div>
                    <div className="MoreButton">
                    <span class="material-icons">more_horiz</span> 
                    </div>
                </div>
            </div>
            <div className="TopCardDescriptionContainer">
                <div className="TopCardOptions">
                    <div className="TopCardDescription"></div>
                    <div className="TopCardTranscription"></div>
                </div>
            </div>
            <div className="TopCardTags"></div>
            
        </div>
      </div> 
  );
}
export default TopCardEpisode

