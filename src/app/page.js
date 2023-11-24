
import MainMenu from "./components/MainMenu";
import Layout from "./layout";
import Style from "./styles/globals.scss";
import Variables from "./styles/variables.modules.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Player from "./components/Player"
import Image from "next/image"

// `app/page.js` is the UI for the `/` URL
export default function Page() {
  return (
    
    <Layout>
    <MainMenu/>
    <Main/>
    <Player/>
    </Layout>
  );
}
