"use client";
import { Component } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import Image from "next/image";

function Player() {
  return (
    <div className="PlayerContainer">
      <div className="Player">
        <div className="PlayerTrack">
          <div className="PlayerImg">
            <Image
              src="/img/diseno-diaspora.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </div>
          <div className="PlayerText">
            <h6 className="PlayerTitle">
              {" "}
              <Link href="./player">
                464. EL Diseño como catalizador de otras cosas
              </Link>
            </h6>
            <p className="PlayerArtist">Diseño y Diáspora</p>
          </div>
          <span className="material-icons OnlyDesktop">add_circle_outline</span>
        </div>
        <div className="PlayerActions">
          <div className="PlayerActionsButtons">
            <span className="OnlyDesktop material-icons">1x_mobiledata</span>
            <span className="OnlyDesktop material-icons">replay_10</span>
            <span className="OnlyDesktop material-icons">skip_previous</span>
            <span className="material-icons" id="PlayCircleActions">
              play_circle
            </span>
            <span className="OnlyDesktop material-icons">skip_next</span>
            <span className="OnlyDesktop material-icons">forward_10</span>
          </div>
          <div className="TimeLineContainer">
            {/*TIMELINE DESKTOP*/}
            <p className="OnlyDesktop" id="TimeLimeP">
              {" "}
              0:10:09
            </p>
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              className="OnlyDesktop PlayerActionsTimeLine"
            ></input>
            <p className="OnlyDesktop" id="TimeLimeP">
              {" "}
              0:54:01
            </p>
          </div>
        </div>
        <div className="PlayerGroupActions">
          <span className="material-icons OnlyDesktop">smart_display</span>
          <span className="material-icons OnlyDesktop">queue_music</span>
          <span className="material-icons">devices</span>
          <span className="material-icons OnlyMobile">play_arrow</span>
          <span className="material-icons OnlyDesktop">volume_up</span>
          <div  className="PlayerActionsVolumeSliderContainer">
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              className="PlayerActionsVolumeSlider OnlyDesktop"
            ></input>
          </div>
        </div>
      </div>
      {/*TIMELINE MOBILE*/}
      <input
        type="range"
        min="0"
        max="100"
        value="50"
        className="OnlyMobile PlayerActionsTimeLineMobile"
      ></input>
      {/*}  <div className="prueba">
      
      </div>
    
  */}
    </div>
  );
}
export default Player;
