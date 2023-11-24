// `app/player/page.js` is the UI for the `/dashboard` URL
"use client";
import { Component } from "react";
import TopCardEpisode from "../components/sections/EpisodePage/TopCardEpisode";
import Layout from "./layout";
import MainMenu from "../components/MainMenu"

//CUANDO NO TENÍA LAYOUT METIDA EN LA PAGE, LA PAGINA CARGABA, TODOS LOS ELEMENTOS
// DIVS, ETC, CARGABAN, PERO NO SE VEÍAN EN LA PANTALLA
//PENSÉ QUE PONIENDOLE LAYOUT FUNCIONARÍA PERO ME DA ERROR
function Page() {
  return (
    <Layout>
      <MainMenu/>
      <TopCardEpisode/>
    </Layout>
    
   
  );
}

export default Page