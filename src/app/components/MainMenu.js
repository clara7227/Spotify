"use client";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// O si estás usando SCSS o Sass, puedes importar el archivo SCSS de la siguiente manera:
import "bootstrap/scss/bootstrap.scss";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
//NO ENTIENDO ESTE CODIGO PERO POR SI ACASO NO LO TOCO

export default function MainMenu() {
  return (
    <div className="MainMenu">
      <div className="MainMenuItems">
        <div className="MainMenuItemContainer">
          <span className="material-icons-outlined">home</span>
          <p>Inicio</p>
        </div>
        <div className="MainMenuItemContainer">
          <span className="material-icons">search</span>
          <p>Buscar</p>
        </div>
        <div className="MainMenuItemContainer">
          <div id="LibraryItemContainer">
            <span className="material-icons">library_books</span>
            <p>Tu Biblioteca</p>
          </div>
          <div className="LightIcons">
            <span className="material-icons">add</span>
            <span className="material-icons">arrow_forward</span>
          </div>
        </div>
      </div>
      <div className="LibraryContainer">
        <div className="LibraryTagsContainer">
          <ul className="LibraryTags">
            <li className="LibraryTag">Listas</li>
            <li className="LibraryTag">Pódcast y programas</li>
            <li className="LibraryTag">Álbumes</li>
            <li className="LibraryTag">Artistas</li>
            <li className="LibraryTag">Estaciones</li>
          </ul>
       
          <span className="material-icons" id="LibraryTagsSlider">
            arrow_forward_ios
          </span>
        </div>
        
        <div className="LibraryItemsListContainer">
          <div className="LibrarySearch">
            <span className="material-icons">search</span>
            <div>
              <p>Recientes</p>
              <span className="material-icons">list</span>
            </div>
          </div>
          <ul className="LibraryItemsList">
            <li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>Canciones que te gustan</h6>
                <div className="DescriptionList">
                  <span className="material-icons">push_pin</span>
                  <p>Lista · 1257 canciones</p>
                </div>
              </div>
            </li>
            <li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>Primavera 2023</h6>
                <div className="DescriptionList">
                  <span className="material-icons">push_pin</span>
                  <p>Lista · Clara SZ</p>
                </div>
              </div>
            </li>
            <li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>LoFi Girl - Beats to relax or study to</h6>
                <div className="DescriptionList">
                  <span className="material-icons">push_pin</span>
                  <p>Lista · LoFi Girl</p>
                </div>
              </div>
            </li>
            <li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>LoFi Girl - Beats to relax or study to</h6>
                <div className="DescriptionList">
                  <p>Lista · LoFi Girl</p>
                </div>
              </div>
            </li>
            <li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>LoFi Girl - Beats to relax or study to</h6>
                <div className="DescriptionList">
                  <p>Lista · LoFi Girl</p>
                </div>
              </div>
            </li><li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>LoFi Girl - Beats to relax or study to</h6>
                <div className="DescriptionList">
                  <p>Lista · LoFi Girl</p>
                </div>
              </div>
            </li><li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>LoFi Girl - Beats to relax or study to</h6>
                <div className="DescriptionList">
                  <p>Lista · LoFi Girl</p>
                </div>
              </div>
            </li><li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>LoFi Girl - Beats to relax or study to</h6>
                <div className="DescriptionList">
                  <p>Lista · LoFi Girl</p>
                </div>
              </div>
            </li><li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>LoFi Girl - Beats to relax or study to</h6>
                <div className="DescriptionList">
                  <p>Lista · LoFi Girl</p>
                </div>
              </div>
            </li><li>
              <Image
                src="/img/diseno-diaspora.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <div className="LibraryItems">
                <h6>LoFi Girl - Beats to relax or study to</h6>
                <div className="DescriptionList">
                  <p>Lista · LoFi Girl</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
