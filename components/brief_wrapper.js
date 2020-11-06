import { motion } from "framer-motion";
import constants from "./constants";
import Layout from "./layout";
import Head from "next/head";
import Audio from "./audio";
import { themen, familie, orte } from "../public/data.json";
import React, { useState } from "react";
import { FiMove } from "react-icons/fi";

export default function Brief_wrapper(props) {

  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });

  const leftpixels = width * 0.8;

  const data = props.data;
  console.log(data);

  const pics = data.map((data) => data.digitalisate.page);
  const th = data.map((data) => data.themen.id);
  const them = [];
  const se = data.map((data) => data.sender.id);
  const sen = [];
  const em = data.map((data) => data.empfänger.id);
  const emp = [];

  th[0].map((data, id) => {
    // console.log(data);
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

  // Ort

  // Toggle Themenmarkierung
  const [isActive, setActive] = useState("false");
  const [isThema, setThema] = useState("false");

  function themenToggle(name) {
    // alert(`hello, ${name}`);
    setActive(!isActive);
    setThema(name + "-active");
    console.log(`hello, ${name}`);
  }

  return data.map((data, id) => {
    return (
      <Layout>
        <Head>
          <title>Brief</title>
        </Head>

        {/* console.log(data) */}
        {/* <MyComponent/> */}

        {/* <Handle/> */}

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
                    <h2>
                      <span className="name">{item.name}</span>
                      <br></br>
                      <span className="name">{item.lebzeit}</span>
                    </h2>
                    {/* get the ort */}
                    <h3>
                      {orte
                        .filter((item) => {
                          return item.id === data.sender.ort;
                        })
                        .map((data) => data.title)}
                    </h3>
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
                      <br></br>
                      <span className="name">{item.lebzeit}</span>
                    </h2>
                    {/* get the ort */}
                    <h3>
                      {orte
                        .filter((item) => {
                          return item.id === data.empfänger.ort;
                        })
                        .map((data) => data.title)}
                    </h3>
                  </div>
                  <img
                    className="portrait"
                    src={`../pictures/personen/thumbnails/${item.picture}`}
                  />
                </div>
              ))}
            </div>

            {/* experiments */}
            {/* <Toggleclass /> */}
            {/* <ExampleComponent /> */}

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

            <div
              className={`detail-ansicht ${
                isActive ? null : "themenmakierung-active"
              } ${isActive ? null : isThema}`}
            >
              <div className="normalisiert">{props.children}</div>

              <div className="themen">
                {them.map((item, index) => (
                  <a
                    onClick={() => themenToggle(item[0].slug)}
                    key={item[0].id}
                  >
                    <img src={`../pictures/themen/${item[0].picture}`} />
                    <label>{item[0].title}</label>
                  </a>
                ))}
              </div>
            </div>

            {/*  */}
            <motion.div drag="x" className="handlebar" dragConstraints={{ left: -leftpixels, right: 0 }} >
              <FiMove />
            </motion.div>

            

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

            <div className="orte">
              <div className="sender">
                <h1>{data.sender.ort}</h1>
                <img
                  src={`../../pictures/orte/${data.sender.ort}.jpg`}
                  key={data.sender.id}
                />
              </div>
              <div className="empfänger">
                <h1>{data.empfänger.ort}</h1>
                <img
                  src={`../../pictures/orte/${data.empfänger.ort}.jpg`}
                  key={data.empfänger.id}
                />
              </div>
            </div>

            {/* weitere briefe / themen */}
          </motion.div>
        </motion.div>
      </Layout>
    );
  });
}



// exsample
// function Toggleclass() {
//   // toggle experiment
//   const [isActive, setActive] = useState("false");
//   // const [isActive, setActive] = useState("false");

//   const handleToggle = () => {
//     setActive(!isActive);
//   };

//   return (
//     <>
//       <div
//         className={isActive ? null : "themenmakierung-active"}
//         className="sd"
//       >
//         <h1 className={isActive ? null : "active"}>Hello react</h1>
//       </div>
//       <button onClick={handleToggle}>Toggle class</button>
//     </>
//   );
// }

// onclick example
// const ExampleComponent = () => {
//   function sayHello(name) {
//     alert(`hello, ${name}`);
//   }

//   return <button onClick={() => sayHello("James")}>Greet</button>;
// };
