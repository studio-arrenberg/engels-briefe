import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import data from "../public/data.json";
import { motion } from "framer-motion";
import constants from "../components/constants";
import IdleTimer from "../components/IdleTimer";

export default function Briefe() {
  return (
    <Layout home>
      <Head>
        <title>Impressum</title>
      </Head>

      <motion.div
        className="impressum"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >

     <h1>Die Medieninstallation wurde im Rahmen eines Kooperationsprojekts zwischen der Bergischen Universität Wuppertal und dem Historischen Zentrum sowie Stadtarchiv Wuppertal erarbeitet. Für finanzielle Förderung danken wir dem NRW-Ministerium für Wisenschaft und Kultur sowie der Bergischen Universität.</h1>
      <h2>Museumsinstalation</h2>
      <p>
        <b>Philologische Inhalte (Transkriptionen, Textkonstitution, Kommentare)</b> <br />
        Wolfgang Lukas, Ulrich Rummel <br /> <br />

        <b>Computerphilologische Konzeption und informationstechnologische Umsetzung </b><br />
        Fabian Etling <br /> <br />

        <b>Interfacedesign und Realisation:</b>  <br />
          Studio Arrenberg: Camilo Martins, Johann Rohn, Moritz Windmann;  <br />
          Kristian Wolf <br /> <br />

        <b>Projektleitung: </b> <br />
          Wolfgang Lukas / Kristian Wolf <br /> <br />


          </p>


        <h2>Online-Edition</h2>
        <p>
        Industriegeschichte privat: Die Familie Engels in Briefen (1791–1858) <br /> 
        Digitale kommentierte Online-Edition.<br /><br /> Hg. von Wolfgang Lukas, Fabian Etling und Ulrich Rummel, in Verbindung mit David Grieshammer, Tim Helfendörfer und Kristian Wolf. <br />Wuppertal 2021ff.
        </p>

        <img className="logo" src="../pictures/logos/onlineedition_qrcode.svg" />

      </motion.div>

      <div className="logos-container">
        <img className="logo" src="../pictures/logos/BUW_Logo.svg" />
        <img className="logo" src="../pictures/logos/STU-logo.svg" />
        <img className="logo" src="../pictures/logos/Museum_Industriekultur_Logo.svg" />
      </div>
      <IdleTimer/>
    </Layout>
  );
}
