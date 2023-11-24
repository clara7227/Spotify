"use client";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import EpisodeCard from "../Episodes/EpisodeCard";

export function NextCard() {
  return (
    <div className="NextCardContainer">
      <EpisodeCard />
    </div>
  );
}
