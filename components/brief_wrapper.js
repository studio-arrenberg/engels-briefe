import { motion, useAnimation } from "framer-motion";
import constants from "./constants";
import Layout from "./layout";
import Head from "next/head";
import Audio from "./audio";
import { themen, familie, orte } from "../public/data.json";
import React, { useState, useEffect, useRef } from "react";
import { FiMove } from "react-icons/fi";

import ReactDOM from "react-dom";

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

  // Toggle Themenmarkierung
  const [isActive, setActive] = useState("false");
  const [isThema, setThema] = useState("false");

  function themenToggle(name) {
    // alert(`hello, ${name}`);
    setActive(!isActive);
    setThema(name + "-active");
    console.log(`hello, ${name}`);
  }

  // Swipe Briefansicht <=> Detailansicht
  const translate = width * 1.1;
  const [isOpen, setIsOpen] = useState(false);

  const [buttonText, setButtonText] = useState("left"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  function onToggle() {
    setIsOpen(!isOpen);

    if (isOpen) {
      setButtonText("left");
      console.log("fire! state:" + isOpen + " txt: " + buttonText);
    } else {
      setButtonText("right");
    }
  }

  const prevIsOpen = usePrevious(isOpen);
  const controls = useAnimation();

  function onDragEnd(event, info) {
    const shouldClose =
      info.velocity.x > 20 || (info.velocity.x >= 0 && info.point.x > 45);
    if (shouldClose) {
      controls.start("hidden");
      onClose();
    } else {
      controls.start("visible");
      onOpen();
    }
  }

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  return data.map((data, id) => {
    return (
      // <Layout>
      //   <Head>
      //     <title>Brief</title>
      //   </Head>

      <>
        <Button onClick={onToggle}>{buttonText}</Button>
        {/* <div className="tester">
          <BottomSheet onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
        </div> */}

        <motion.div
          className="brief_view"
          initial="initial"
          animate="enter"
          exit="exit"
          key={`brief-${data.id}`}
          variants={constants.animation.section_exit}
        >
          <motion.div
            key={`brief-inner-${data.id}`}
            variants={constants.animation.post}
            layoutId={`${data.id}`}
          >
            {/* META */}
            <div className="meta">
              {/* sender */}
              {sen[0].map((item, index) => (
                <div key={`sender-${index}`} className="sender">
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
                <div key={`reciever-${index}`} className="empfänger">
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

            {/* brief inhalt */}
            <motion.div
              className="brief-container"
              drag="x"
              onDrag={(event, info) => console.log(info.point.x, info.point.y)}
              onDragEnd={onDragEnd}
              className="box"
              initial="hidden"
              animate={controls}
              transition={{
                type: "spring",
                damping: 40,
                stiffness: 700,
              }}
              variants={{
                visible: { x: 0 },
                hidden: { x: -translate },
              }}
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              style={{
                display: "inline-block",
                backgroundColor: "green",
                marginLeft: 20,
                width: 200,
                height: 100,
              }}
            >
              <div className="brief-scroll-container">
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
              </div>
            </motion.div>

            {/* <motion.div
            drag="x"
            className="handlebar"
            dragElastic={0.9}
            dragConstraints={{ left: -leftpixels, right: 0 }}
            // onDrag={(event, info) => console.log(info.point.x, info.point.y)}
            onDragEnd={(event, info) => console.log(info.point.x, info.point.y)}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 900 }}
          >
            <FiMove />
          </motion.div> */}

            {/* <div className="navigation">
            <a>
              <h3>Vergleichsansicht</h3>
            </a>

            <a>
              <h3>Detailansicht</h3>
            </a>
          </div> */}

            <div className="player">
              <Audio file={data.audio}></Audio>
            </div>

            {/* orte */}

            <div className="orte">
              <div className="sender">
                <h1>
                  {orte
                    .filter((item) => {
                      return item.id === data.sender.ort;
                    })
                    .map((data) => data.title)}
                </h1>
                <img
                  src={`../../pictures/orte/${orte
                    .filter((item) => {
                      return item.id === data.sender.ort;
                    })
                    .map((data) => data.title)}.jpg`}
                  key={data.sender.id}
                />
              </div>
              <div className="empfänger">
                <h1>
                  {orte
                    .filter((item) => {
                      return item.id === data.empfänger.ort;
                    })
                    .map((data) => data.title)}
                </h1>
                <img
                  src={`../../pictures/orte/${orte
                    .filter((item) => {
                      return item.id === data.empfänger.ort;
                    })
                    .map((data) => data.title)}.jpg`}
                  key={data.empfänger.id}
                />
              </div>
            </div>

            {/* weitere briefe / themen */}
          </motion.div>
        </motion.div>
      </>
    );
  });
}

// function BottomSheet({ isOpen, onClose, onOpen }, props, onToggle) {
//   const prevIsOpen = usePrevious(isOpen);
//   const controls = useAnimation();

//   function onDragEnd(event, info) {
//     const shouldClose =
//       info.velocity.x > 20 || (info.velocity.x >= 0 && info.point.x > 45);
//     if (shouldClose) {
//       controls.start("hidden");
//       onClose();
//     } else {
//       controls.start("visible");
//       onOpen();
//     }
//   }

//   const [width, setWidth] = React.useState(0);
//   React.useEffect(() => {
//     setWidth(window.innerWidth);
//   });

//   const leftpixel = width * 0.8;

//   useEffect(() => {
//     if (prevIsOpen && !isOpen) {
//       controls.start("hidden");
//     } else if (!prevIsOpen && isOpen) {
//       controls.start("visible");
//     }
//   }, [controls, isOpen, prevIsOpen]);

//   return (
//     <motion.div
//       drag="x"
//       onDrag={(event, info) => console.log(info.point.x, info.point.y)}
//       onDragEnd={onDragEnd}
//       className="box"
//       initial="hidden"
//       animate={controls}
//       transition={{
//         type: "spring",
//         damping: 40,
//         stiffness: 700,
//       }}
//       variants={{
//         visible: { x: 0 },
//         hidden: { x: "-200px" },
//       }}
//       dragConstraints={{ top: 0 }}
//       dragElastic={0.2}
//       style={{
//         display: "inline-block",
//         backgroundColor: "green",
//         marginLeft: 20,
//         width: 200,
//         height: 100,
//       }}
//     >
//       <div className="inner">
//         <p>
//           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//           nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
//           sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
//           rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
//           ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
//           sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
//           dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
//           et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
//           takimata sanctus est Lorem ipsum dolor sit amet.
//         </p>
//       </div>
//     </motion.div>
//   );
// }

function usePrevious(value) {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}

function Button(props) {
  return <button className="buttontester" {...props} />;
}
