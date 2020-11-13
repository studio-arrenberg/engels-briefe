import {
  motion,
  useAnimation,
  useMotionValue,
  useDragControls,
  transform,
  useTransform,
} from "framer-motion";
import constants from "./constants";
import Layout from "./layout";
import Head from "next/head";
import Audio from "./audio";
import { themen, familie, orte } from "../public/data.json";
import React, { useState, useEffect, useRef } from "react";
// import { FiMove } from "react-icons/fi";
// import ReactDOM from "react-dom";

export default function Brief_wrapper(props) {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });

  const leftpixels = width * 0.8;
  

  const data = props.data;
  // console.log(data);

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
    // console.log(`hello, ${name}`);
  }

  // Vertical Slider
  const x = useMotionValue(0);

  const x_fast = useTransform(x, (latestX) => latestX * 1.2);
  const x_slow = useTransform(x, (latestX) => latestX * 0.8);

  // const [handlex, setHandelx] = useState(0);
  const handlebar_width = 400; 
  const handle_constraint = width - handlebar_width;

  const input = [-width, -handle_constraint, -handlebar_width, 0];
  const output_width = [handlebar_width, width * 0.8, width * 0.8, handlebar_width];
  const output_opacity = [0,0.2,0.6,1];

  const handle_width = useTransform(x, input, output_width);
  const letter_opacity = useTransform(x, input, output_opacity);

  return data.map((data, id) => {
    return (
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
                <img
                  className="portrait"
                  src={`../pictures/personen/thumbnails/${item.picture}`}
                />
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
                
              </div>
            ))}
          </div>

          {/* brief inhalt */}
        </motion.div>

        <motion.div
          className="swipewrapper"
          key="swipewrapper"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={constants.animation.section_exit}
        >
          <motion.div className="vergleichs-ansicht vergleich">
            <motion.div
              key="digitalisat1"
              className="vergleich-l digitalisate"
              style={{
                margin: 10,
                x: x_slow,
              }}
            >
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
                <img src={`../../pictures/digitalisate/${item}`} key={index} />
              ))}
            </motion.div>
            <motion.div
              key="digitalisat2"
              className="vergleich-r"
              style={{
                margin: 10,
                x: x_fast,
                opacity: letter_opacity
              }}
            >
              <div className="brieftext">
                <div>{props.children}</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            drag="x"
            className="handlebar"
            style={{
              width: handle_width,
              // opacity: handle_opacity,
              x,
            }}
            dragConstraints={{ left: -handle_constraint, right: 0 }}
            // 3160 besser wäre 100% - 200px
            // onDrag={(event, info) => console.log("raw: " + info.point.x + " trans: " + transform(info.point.x, input, output))}
          >
          </motion.div>

          <BouncingBall/>

          <motion.div
            className="detail"
            style={{
              x: x,
            }}
          >
            <div
              className={`detail-ansicht ${
                isActive ? null : "themenmakierung-active"
              } ${isActive ? null : isThema}`}
            >
              <div className="normalisiert">{props.children}</div>
            </div>
          </motion.div>

          <motion.div className="themen" style={{
              x: x,
            }}>
                {them.map((item, index) => (
                  <a
                    onClick={() => themenToggle(item[0].slug)}
                    key={item[0].id}
                  >
                    <img src={`../pictures/themen/${item[0].picture}`} />
                    <label>{item[0].title}</label>
                  </a>
                ))}
              </motion.div>
        </motion.div>

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
      </motion.div>
    );
  });
}

export function BouncingBall() {

  const dura = 0.6;
  const del = 0.1;

  const bounceTransition = {
    x: {
      duration: dura,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay : del
    },
    backgroundColor: {
      duration: dura / 2,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: (dura / 2) + del,
    },
    opacity: {
      duration: dura / 2,
      yoyo: Infinity,
      ease: "easeIn",
      repeatDelay: (dura / 2) + del,
    },
  }

  const ballStyle = {
    display: "block",
    // width: "12rem",
    width: "80px",
    // height: "6rem",
    backgroundColor: "white",
    borderRadius: "3rem"
  }

  return (
    <div
      style={{
        position: "relative",
        left: 600,
        top: 200,
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <motion.span
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          x: ["80px", "-80px"],
          // backgroundColor: ["#e810e1", "#6666ff"],
          backgroundColor: ["#000000", "#ffffff"],
          opacity: [0,0.4],
        }}
      />
    </div>
  )
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
