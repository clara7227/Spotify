"use client";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.getElementById("Main");
      if (mainElement) {
        // Verificar si el scroll es mayor a 100px
        if (mainElement.scrollTop > 500) {
          // Si es mayor a 100px, establecer la clase
          setScrolled(true);
        } else {
          // Si es menor a 100px, eliminar la clase
          setScrolled(false);
        }
      }
    };

    //PARA QUE HAGA SCROLL EN PLAYER
    const handleScrollPlayer = () => {
      const mainElement = document.getElementById("MainPlayer");
      if (mainElement) {
        // Verificar si el scroll es mayor a 100px
        if (mainElement.scrollTop > 500) {
          // Si es mayor a 100px, establecer la clase
          setScrolled(true);
        } else {
          // Si es menor a 100px, eliminar la clase
          setScrolled(false);
        }
      }
    };


    

    const main = document.getElementById("Main");
    if (main) {
      main.addEventListener("scroll", handleScroll);
    }
    
    const mainPlayer = document.getElementById("MainPlayer");
    if (mainPlayer) {
      mainPlayer.addEventListener("scroll", handleScrollPlayer);
    }


    return () => {
      if (main) {
        main.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className={scrolled ? "NavContainerScrolled" : "NavContainer"}>
      <ul className="Navigation">
        <span className="material-icons-outlined">arrow_back_ios</span>
        <span className="material-icons-outlined">arrow_forward_ios</span>
        <div className={scrolled ? "ShowNameDisplay" : "ShowNameDisplayNot"}>
          <h4>Diseño y Diáspora</h4>
        </div>
      </ul>

      <ul className="ButtonGroup">
        <li className="DiscoverButton">Descubrir Premium</li>
        <li className="NotificationButton">
          <span className="material-icons-outlined">notifications</span>
        </li>
        <li className="CommunityButton">
          <span className="material-icons-outlined">groups</span>
        </li>
        <li className="ProfileButton">
          <Image
            src="/img/diseno-diaspora.png"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        </li>
      </ul>
    </div>
  );
}

//React.DOM.render(<Nav/>)
