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

     <h1>Die Medieninstallation wurde im Rahmen eines Kooperationsprojekts zwischen der Bergischen Universität Wuppertal, dem Museum Industriekultur Wuppertal und dem Stadtarchiv Wuppertal erarbeitet. Sie bietet eine kommentierte Auswahledition (18 Briefe) des im Stadtarchiv Wuppertal unter der Signatur ND 3 in der ‚Dokumentation Friedrich Engels‘ aufbewahrten Konvoluts von 342 Briefen der Familie Engels aus dem Zeitraum von 1791 bis 1858. Die Sammlung ist als Online-Edition vollständig einsehbar unter: <span className="underline"><i>www.familie-engels-briefe.de</i></span>  <br /><br />Für finanzielle Förderung danken wir dem Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen sowie der Bergischen Universität Wuppertal.</h1>
      <h2>Museumsinstallation</h2>
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
        <i>Industriegeschichte privat: Die Familie Engels in Briefen (1791–1858) <br /> 
        Digitale kommentierte Online-Edition.</i><br /><br /> Hg. von Wolfgang Lukas, Fabian Etling und Ulrich Rummel, in Verbindung mit David Grieshammer, Tim Helfensdörfer und Kristian Wolf. <br />Wuppertal 2021ff.
        </p>

        <img className="qrcode" src="../pictures/logos/onlineedition-qr-code.svg" />

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
