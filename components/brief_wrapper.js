import {
  motion,
  useAnimation,
  useMotionValue,
  useDragControls,
  transform,
  useTransform,
  useViewportScroll,
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
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
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
    // setActive(!isActive);
    if (name == isThema) {
      console.log("same");
      setThema("false");
      setActive(true);
    } else {
      setThema(name);
      setActive(false);
    }
    console.log("current: " + name + " useState: " + isThema);
  }

  // Vertical Slider
  const x = useMotionValue(0);
  // const y = useMotionValue(0);
  const { scrollY, scrollYProgress } = useViewportScroll()

  const x_fast = useTransform(x, (latestX) => latestX * 1.08); // 15" 1.2
  const x_slow = useTransform(x, (latestX) => latestX * 0.61); // 15" 0.58
  // const x_normal = useTransform(x, (latestX) => latestX - 500);
  const x_normal = useTransform(x, [0, -300, -2500], [-300, -600, -2450]); // test

  const handlebar_width = 550;
  const handle_constraint = width - handlebar_width;

  const input = [-width, -width + 200, -200, 0];
  const output_width = [
    handlebar_width,
    width * 0.8,
    width * 0.8,
    handlebar_width,
  ];
  const output_opacity = [0, 0.2, 0.6, 1];

  const [pos_y, SetPos_y] = useState(0)
  const handle_color = ""; // for testing
  const handle_y = useTransform(scrollY, (latestX) => latestX * 1);
  const handle_width = useTransform(x, input, output_width);
  const letter_opacity = useTransform(x, input, output_opacity);
  const ball_opacity_right = useTransform(x, input, [0, 0, 0, 1]);
  const ball_opacity_left = useTransform(x, input, [1, 1, 0, 0]);


  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      
      const yPos = window.scrollY;

      SetPos_y(yPos)
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  // Get swipewrapper height
  const inputRef = useRef(null);
  const [swipeheight, setSwipheight] = useState(0);

  useEffect(
    (swipewrapper_height) => {
      console.log("Input height", inputRef.current.offsetHeight);
      setSwipheight(inputRef.current.offsetHeight);
    },
    [inputRef]
  );

  // Swipe animation fade in / out on y position
  // const { scrollY, scrollYProgress } = useViewportScroll()
  // const scrollinput = [0, 1150, 1170, swipeheight + 1170,swipeheight + 1200, height];
  // const opacityswipeoutput = [0,0,1,1,1,0];
  // const opacityswipe = useTransform(scrollY, scrollinput, opacityswipeoutput);
  const opacityswipe = 1;

  // Stellenbeschreibung ein und ausblenden

  // normalisierte ansicht preview peak

  // themen card class ausgefahren/activ

  return data.map((data, id) => {

    // scrollY.onChange(x => {
    //   // setFfLayer(x > 0.4 ? -1 : 0)
    //   console.log("pro: " + scrollY)
    // })

    // scrollY.onChange((latest) => {
    //   console.log(latest);
    // });

    // scrollY.onChange(y => {
    //   SetPos_y(y - (1000))
    //   // console.log(pos_y)
    // })

    // scrollYProgress.onChange(y => {
    //   // SetPos_y(y)
    //   console.log(y)
    // })

    return (
      
      <motion.div
        className="brief_view"
        initial="initial"
        animate="enter"
        exit="exit"
        key={`brief-${data.id}`}
        variants={constants.animation.section_exit}
      >
        {/* META */}
        <motion.div
          className="meta"
          key={`brief-inner-${data.id}`}
          variants={constants.animation.post}
          layoutId={`${data.id}`}
        >
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

          {/* brief inhalt */}
        </motion.div>

        <motion.div
          className="swipewrapper"
          key="swipewrapper"
          initial="initial"
          animate="enter"
          exit="exit"
          ref={inputRef}
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

              <h3>Originaldokument </h3>
            </motion.div>
            <motion.div
              key="digitalisat2"
              className="vergleich-r"
              style={{
                margin: 10,
                x: x_fast,
                // opacity: letter_opacity,
              }}
            >
              <div className="brieftext">
                <div>{props.children}</div>
              </div>
              <h3>Transkription</h3>
            </motion.div>
          </motion.div>

          <motion.div
            drag="x"
            className="handlebar"
            style={{
              width: handle_width,
              opacity: 1,
              x,
              // y : pos_y,
              backgroundColor: handle_color,
            }}
            dragConstraints={{ left: -handle_constraint, right: 0 }}
            // onDrag={(event, info) => console.log("raw: " + info.point.x + " trans: " + transform(info.point.x, input, output))}
          >
            <motion.div className="hellodiv" style={{
                y: pos_y,
            }} />
            {/* <motion.div
              className="bouncingball-right"
              style={{ opacity: ball_opacity_right, rotate: 0 }}
            >
              <motion.div style={{ opacity: opacityswipe }}>
                <BouncingBall />
              </motion.div>

              <p>detailansicht</p>
            </motion.div>

            <motion.div
              className="bouncingball-left"
              style={{ opacity: ball_opacity_left, rotate: 180 }}
            >
              <BouncingBall />
            </motion.div> */}
          </motion.div>

          <motion.div
            className="detail"
            style={{
              x: x_normal,
            }}
          >
            <div
              className={`detail-ansicht ${
                isActive ? null : "themenmakierung-active"
              } ${isActive ? null : isThema + "-active"}`}
            >
              <div className="normalisiert">
                {props.children}
                <h3>Normalisierte Leseansicht</h3>
              </div>
            </div>

            <motion.div
              className="themen"
              style={{
                x: x,
              }}
            >
              {them.map((item, index) => (
                <a
                  className={`${isThema == item[0].slug ? "activ" : "null"}`}
                  onClick={() => themenToggle(item[0].slug)}
                  key={item[0].id}
                >
                  <img src={`../pictures/themen/${item[0].picture}`} />
                  <label>{item[0].title}</label>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="player">
          <Audio file={data.audio}></Audio>
        </div>

        {/* orte */}

        <div className="orte">
          <div className="sender-ort">
            <img
              src={`../../pictures/orte/${orte
                .filter((item) => {
                  return item.id === data.sender.ort;
                })
                .map((data) => data.title)}.jpg`}
              key={data.sender.id}
            />
            {/* get the ort */}
            <h2>
              {orte
                .filter((item) => {
                  return item.id === data.sender.ort;
                })

                .map((data) => data.title)}

              <span className="bildnachweis">
                {orte
                  .filter((item) => {
                    return item.id === data.sender.ort;
                  })
                  .map((data) => data.bildnachweis)}
              </span>
            </h2>
          </div>
          <div className="empfänger-ort">
            <img
              src={`../../pictures/orte/${orte
                .filter((item) => {
                  return item.id === data.empfänger.ort;
                })
                .map((data) => data.title)}.jpg`}
              key={data.empfänger.id}
            />

            <h2>
              {orte
                .filter((item) => {
                  return item.id === data.empfänger.ort;
                })

                .map((data) => data.title)}

              <span className="bildnachweis">
                {orte
                  .filter((item) => {
                    return item.id === data.empfänger.ort;
                  })
                  .map((data) => data.bildnachweis)}
              </span>
            </h2>
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
      repeatDelay: del,
    },
    backgroundColor: {
      duration: dura / 2,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: dura / 2 + del,
    },
    opacity: {
      duration: dura / 2,
      yoyo: Infinity,
      ease: "easeIn",
      repeatDelay: dura / 2 + del,
    },
  };

  const ballStyle = {
    display: "block",
    // width: "12rem",
    width: "80px",
    // height: "6rem",
    backgroundColor: "white",
    borderRadius: "3rem",
  };

  return (
    <div
      style={{
        position: "relative",
        left: 0,
        top: 0,
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
          backgroundColor: ["#000000", "#FFFFFF"],
          opacity: [0, 0.4],
        }}
      />
    </div>
  );
}

// const YourComponent = () => {
//   const inputRef = useRef(null);
//   useEffect(() => {
//      const height = inputRef.current.offsetHeight;
//      console.log('Input height', height);
//   }, [inputRef]);

//   return <>
//     <input style={{height:200}} ref={inputRef} type="text" defaultValue="testing" />
//   </>
// }
