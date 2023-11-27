"use client";
import { Component } from "react";
import { Nav } from "../../components/nav/Nav";

import { TopCard } from "../../components/sections/ProfilePage/TopCard";
import { NextCard } from "../../components/sections/ProfilePage/NextCard";
import { AllCards } from "../../components/sections/ProfilePage/AllCards";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";

function MainPlayer() {
  return (
    <div id="MainPlayer">
      <div className="MainTop">
        <Nav />
        <TopCard />
      </div>
      <NextCard />
      <AllCards />
    </div>
  );
}

export default MainPlayer;
