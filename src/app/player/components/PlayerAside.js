"use client";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import "material-icons/iconfont/material-icons.css";

function PlayerAside() {
  return (
    <div className="PlayerAside">
      <div className="TitleContainer">
        <div className="LanguageContainer MotherLanguage">
          <div className="Title">
            <h2>464. El diseño como catalizador para otr...</h2>
            <h5> Diseño y Diáspora</h5>
          </div>
          <div className="TitleButtons">
            <span className="material-icons">add_circle_outline</span>
            <span className="material-icons">more_horiz</span>
          </div>
        </div>
        <div className="LanguageContainer OtherLanguage">
          <div className="Title">
            <h2>464. Design als Katalysator für ander...</h2>
            <h5> Design und Diáspora</h5>
          </div>
          <div className="Functionality">
            <span className="material-icons">translate</span>
          </div>
        </div>
      </div>
      <div className="TranscriptionWarning">
        <b>Transcripcion</b>
        <p>Esta transcripción ha sido traducida de manera automática.</p>
      </div>
      <div className="TranscriptionsContainer">
        <div className="MotherLanguage MotherLanguageTranscription">
          <div className="TextTranscription">
            <p>
              <span className="Listened">
                0:47
                <br></br>
                Como saben, me gusta hacer episodios con o 3 y esta colaboración
                haciendo entrevistas es una manera de salir de mi{" "}
              </span>
              <span className="Hightlight"> burbuja </span>
              <span className="NotListened">
                y abrirme a otras. Esta entrevista está hecha con Ricardo
                Amaste, de colabora Bora, que los que escuchan este podcast ya
                conocen la idea de entrevistar a Curro Claret.
                <br></br>
                <br></br>
                1:05<br></br> Fue suya. Curro Claret Martí es{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="OtherLanguage OtherLanguageTranscription">
          <div className="TextTranscription">
            <p>
              <span className="Listened">
                0:47
                <br></br>
                0:47 Wie ihr wisst, mache ich gerne Episoden mit 2 oder 3
                Gästen, und diese Zusammenarbeit, bei der ich Interviews führe,
                ist eine Möglichkeit, aus meiner eigenen
              </span>
              <span className="Hightlight"> Blase </span>
              <span className="NotListened">
                auszubrechen und mich für Neues zu öffnen. Dieses Interview
                wurde mit Ricardo Amaste von Colabora Bora geführt. Diejenigen,
                die diesen Podcast hören, kennen bereits die Idee, Curro Claret
                zu interviewen.
                <br></br>
               
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayerAside;
