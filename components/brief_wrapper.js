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
import Audio from "./audio";
import { themen, familie, orte } from "../public/data.json";
import React, { useState, useEffect, useRef } from "react";
import IdleTimer from '../components/IdleTimer';
// import idleTimer from "idle-timer";

export default function Brief_wrapper (props) {

  const [width, setWidth] = React.useState(0);
  // const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  });

  // prep data
  const data = props.data;
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
    }
    else if (name == 'off') {
      setThema("false");
      setActive(true);
    } 
    else {
      setThema(name);
      setActive(false);
    }
    console.log("current: " + name + " useState: " + isThema);
  }

  // Vertical Slider
  const x = useMotionValue(0);
  const { scrollY, scrollYProgress } = useViewportScroll();

  // Brief Pages
  const x_fast = useTransform(x, (latestX) => latestX * 1.08); // 15" 1.2 // prev 1.08
  const x_slow = useTransform(x, (latestX) => latestX * 0.61); // 15" 0.58 // prev 0.61
  const x_normal = useTransform(x, [0, -300, -2500], [-270, -600, -2420]); // test

  // Handlebar
  const handlebar_width = 550;
  const handle_constraint = width - handlebar_width;

  // Transform
  const input = [-width, -width + 200, -200, 0];
  const output_width = [
    handlebar_width,
    width * 0.8,
    width * 0.8,
    handlebar_width,
  ];
  const handle_color = ""; // for testing
  const handle_width = useTransform(x, input, output_width);
  const ball_opacity_right = useTransform(x, input, [0, 0, 0, 1]);
  const ball_opacity_left = useTransform(x, input, [1, 1, 0, 0]);

  // Toggle Stellenerläuterungen
  const [isStellen, setStellen] = useState(false);

  x.onChange((x_pos) => {
    if (Math.abs(x_pos) < Math.abs(-1500)) {
      // console.log("false")
      setStellen(false);
    } else {
      // console.log("pro: " + Math.abs(x_pos))
      // console.log("true")
      setStellen(true);
    }
    // console.log(isStellen)
    props.stellen(isStellen);
  });



  React.useEffect(() => {
    // alert("weew");
    // console.log('Child did mount.');
    // document.getElementsByClassName('normalisiert').outerHTML.replace("ſ","s")
    // document.body.innerHTML.replace("M","8");
    // document.getElementById('normalisiert').innerHTML.replace("L","8")

    // document.getElementById('testj').innerText.replace("ſ","s").replace("ﬅ","st").replace("ﬅ","st")
    console.log(document.getElementById('index.xml-body.1_div.2').innerHTML.replace("ſ","s").replace("ﬅ","st").replace("ﬅ","st"))


    // document.body.style.display = "none"
    // setHeight(window.innerHeight);
  }, []);


  return data.map((data, id) => {
    return (
      <>
        {/* swipe animation */}
        <div className="sticky-container">
          <motion.div 
            className="bouncingbal"
            style={{ opacity: ball_opacity_left, x: '50px', y : '50px' }}
          >
            <motion.div style={{ rotate: 180, x : '-80px', y : '-25px' }}>
              <BouncingBall />
            </motion.div>

            <p>Vergleichsansicht</p>
          </motion.div>

          <motion.div
            className="bouncingball"
            style={{ opacity: ball_opacity_right }}
          >
            <motion.div>
              <BouncingBall />
            </motion.div>

            <p>Detailansicht</p>
          </motion.div>
        </div>

        {/* brief view */}
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
                  <img
                    src={`../../pictures/digitalisate/${item}`}
                    key={index}
                  />
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

            {/* swipe handlebar */}
            <motion.div
              drag="x"
              className="handlebar"
              style={{
                width: handle_width,
                opacity: 1,
                x,
                backgroundColor: handle_color,
              }}
              dragConstraints={{ left: -handle_constraint, right: 0 }}
            ></motion.div>

            <motion.div
              className="detail"
              style={{
                x: x_normal,
              }}
            >
              {/* themenToggle(item[0].slug) */}
              <div onClick={() => themenToggle('off')}
                className={`detail-ansicht ${
                  isActive ? null : "themenmakierung-active"
                } ${isActive ? null : isThema + "-active"}`}
              >
                <div className="normalisiert" id="normalisiert">
                    {props.children}
                  <h3>Normalisierte Leseansicht</h3>
                </div>
              </div>

              
            </motion.div>
            
            <motion.div
                className="themen"
                style={{
                  x: x,
                }}
              >
                {them.map((item, index) => (
                  <a
                    className={`${isThema == item[0].slug ? "activ" : null}`}
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
          <IdleTimer/>

        </motion.div>
      </>
    );
  });
}

export function BouncingBall() {
  const dura = 0.6;
  const del = 0.1;
  // init dura = 0.6 del = 0.1
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

  return (
    <div className="ball">
      <motion.span
        className="ballStyle"
        transition={bounceTransition}
        animate={{
          x: ["80px", "-80px"],
          backgroundColor: ["#000", "#fff"],
          opacity: [0, 0.2],
        }}
      />
    </div>
  );
}
