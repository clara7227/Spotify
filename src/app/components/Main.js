"use client";
import { Component } from "react";
import { Nav } from "./nav/Nav";
import { TopCard } from "./sections/ProfilePage/TopCard";
import { NextCard } from "./sections/ProfilePage/NextCard";
import { AllCards } from "./sections/ProfilePage/AllCards";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";

function Main() {
  return (
    <div id="Main">
      <div className="MainTop">
        <Nav />
        <TopCard />
      </div>
      <NextCard />

      <AllCards />
    </div>
  );
}

export default Main;
