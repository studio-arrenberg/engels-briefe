import { motion } from "framer-motion";
import constants from "./constants";
import Layout from "./layout";
import Head from "next/head";
import Audio from "./audio";
import { themen, familie } from "../public/data.json";

import React, { useState } from "react";


export default function Brief_wrapper(props) {
  const data = props.data;
  const pics = data.map((data) => data.digitalisate.page);
  const th = data.map((data) => data.themen.id);
  const them = [];
  const se = data.map((data) => data.sender.id);
  const sen = [];
  const em = data.map((data) => data.empfänger.id);
  const emp = [];

  th[0].map((data, id) => {
    console.log(data);
    them[id] = themen.filter((item) => {
      return item.id === data.toString();
    });
  });

  se.map((data, id) => {
    sen[id] = familie.filter((item) => {
      return item.id === data.toString();
    });
  });

  em.map((data, id) => {
    emp[id] = familie.filter((item) => {
      return item.id === data.toString();
    });
  });

  return data.map((data, id) => {
    return (
      <Layout>
        <Head>
          <title>Brief</title>
        </Head>

        {/* console.log(data) */}

        <motion.div
          className="brief_view"
          initial="initial"
          animate="enter"
          exit="exit"
          key={data.id}
          variants={constants.animation.section_exit}
        >
          <motion.div
            key={`${data.id}`}
            variants={constants.animation.post}
            layoutId={`${data.id}`}
          >
            {/* META */}
            <div className="meta">
              {/* sender */}
              {sen[0].map((item, index) => (
                <div className="sender">
                  <div className="meta-beschreibung">
                    <h2 className="name">{item.name}</h2>
                    <h2>{item.lebzeit}</h2>

                    <h3>{data.sender.ort}</h3>
                  </div>

                  <img
                    className="portrait"
                    src={`../pictures/personen/thumbnails/${item.picture}`}
                  />
                </div>
              ))}

              <img className="arrow_send" src={`../icons/back.svg`} />

              {/* empfänger */}

              {emp[0].map((item, index) => (
                <div className="empfänger">
                  <div className="meta-beschreibung">
                    <h2>
                      <span className="name">{item.name}</span>
                      <span className="name">{item.lebzeit}</span>
                    </h2>
                    <h3>{data.empfänger.ort}</h3>
                  </div>
                  <img
                    className="portrait"
                    src={`../pictures/personen/thumbnails/${item.picture}`}
                  />
                </div>
              ))}
            </div>

            {/* toggle experiment */}

            {/* <Toggleclass /> */}

            {/* brief inhalt */}

            <div className="vergleichs-ansicht ">
              <div className="digitalisate">
                {/* load cover */}

                {!!data.digitalisate.cover ? (
                  <img
                    className="kuvert_img"
                    src={`../../pictures/digitalisate/${data.digitalisate.cover}`}
                  />
                ) : (
                  <></>
                )}
                {/* load digitalisate */}
                {pics[0].map((item, index) => (
                  <img
                    src={`../../pictures/digitalisate/${item}`}
                    key={index}
                  />
                ))}
              </div>

              <div className="brieftext">
                <div>{props.children}</div>
              </div>
            </div>


            <div className="detail-ansicht themenmakierung-active">

              <div className="normalisiert">{props.children}</div>
              {/* themen */}

              <div className="themen">
                {them.map((item, index) => (
                  <a key={item[0].id}>
                    <img src={`../pictures/themen/${item[0].picture}`} />
                    <label>{item[0].title}</label>
                  </a>
                ))}
              </div>
            </div>

            <div className="navigation">
              <a>
                <h3>Vergleichsansicht</h3>
              </a>

              <a>
                <h3>Detailansicht</h3>
              </a>
            </div>

            <div className="player">
              <Audio file={data.audio}></Audio>
            </div>

            {/* orte */}

            {/* weitere briefe / themen */}
          </motion.div>
        </motion.div>
      </Layout>
    );
  });
}

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log("The link was clicked.");
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

function Toggleclass() {
  // toggle experiment
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={isActive ? "app" : null}>
        <h1>Hello react</h1>
      </div>
      <button onClick={handleToggle}>Toggle class</button>
    </>
  );
}
