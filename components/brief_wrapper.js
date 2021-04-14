import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  useAnimation
} from "framer-motion";
import constants from "./constants";
import Audio from "./audio";
import { themen, familie, orte } from "../public/data.json";
import React, { useState, useEffect, useRef } from "react";
import IdleTimer from "../components/IdleTimer";
import { FiArrowLeft } from "react-icons/fi";

export default function Brief_wrapper(props) {
  // get window width
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
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
    } else if (name == "off") {
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
  var handle_color = ""; // for testing
  const handle_width = useTransform(x, input, output_width);
  const ball_opacity_right = useTransform(x, input, [0, 0, 0, 1]);
  const ball_opacity_left = useTransform(x, input, [1, 1, 0, 0]);

  // Toggle Stellenerläuterungen
  const [isStellen, setStellen] = useState(false);

  // x.onChange((x_pos) => {
  //   if (Math.abs(x_pos) < Math.abs(-1500)) {
  //     // console.log("false")
  //     setStellen(false);
  //   } else {
  //     // console.log("pro: " + Math.abs(x_pos))
  //     // console.log("true")
  //     setStellen(true);
  //   }
  //   // console.log(isStellen)
  //   props.stellen(isStellen);
  // });

  // Replace function
  // React.useEffect(() => {
  //   var el = document.querySelector('.normalisiert').innerHTML.replace(/ſ/g,"s").replace(/ﬅ/g,"st")
  //   console.log(el)
  //   document.querySelector('.normalisiert').innerHTML = "";
  //   document.querySelector('.normalisiert').innerHTML = el;
  // }, []);

  // if (x.onChange()) {
  //   // console.log();
  //   handle_color = "red"; // for testing
  // }
  // else {
  //   handle_color = "green";
  // }

  function usePrevious(value) {
    const previousValueRef = useRef();
  
    useEffect(() => {
      previousValueRef.current = value;
    }, [value]);
  
    return previousValueRef.current;
  }
  

  // Brief ansichten
  const [isView, setView] = useState(true);
  const controls = useAnimation();
  const prevIsOpen = usePrevious(isView);

  if (isView && !prevIsOpen) {
    // alert("a");
    x.set(0);
    if (isStellen) setStellen(false)
    props.stellen(isStellen)
    // setStellen(true);
  }
  else if (!isView && prevIsOpen) {
    // alert('b');
    x.set(-handle_constraint);
    if (!isStellen) setStellen(true)
    props.stellen(isStellen)
    // setStellen(true);
  }


  // function ViewToggle(state) {

  //   setView(state);

  //   // detail ansicht aktivieren
  //   if (isView == true) {

  //     // controls.start("normal");

  //     x.set(-handle_constraint);
  //     setView(false);

  //     setStellen(false);
  //     alert(isStellen);
  //   }
  //   // normalisierte ansicht aktivieren
  //   else if (isView == false) {
  //     // controls.start("detail");

  //     x.set(0);
  //     setView(true);  
  //     // alert('hihi');
  //     // setStellen(true);
  //     setStellen(!isStellen);

  //     // if (isStellen == false) {
  //     //   setStellen(!isStellen);
  //     // }
  //     alert(isStellen);
  //   }

  //   props.stellen(isStellen);

    
    
  // }

  return data.map((data, id) => {
    return (
      <>
        {/* swipe animation */}
        <div className="sticky-container">
          <motion.div
            className="bouncingbal"
            style={{ opacity: ball_opacity_left, x: "50px", y: "50px" }}
          >
           
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
        <motion.div key="briefe-vergleichs-ansicht"
              initial="initial"
              animate="enter"
              exit="exit"
              variants={constants.animation.brief} >
          <motion.div
            className="swipewrapper"
            key="swipewrapper"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={constants.animation.section_exit}
          >
            <motion.div className="vergleichs-ansicht vergleich" >
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
              onClick={()=> ViewToggle() }
              drag="x"
              className="handlebar"
              dragMomentum={true}
              dragTransition={{ bounceStiffness: 100, bounceDamping: 40 }}

              variants={{
                normal: { left: 0 },
                detail: { left: handle_constraint }
              }}
              animate={controls}

              transition={{
                type: "spring",
                damping: 40,
                stiffness: 400
              }}

              dragConstraints={{ left: -handle_constraint, right: 0 }}

              style={{
                width: handle_width,
                opacity: 1,
                x,
                backgroundColor: handle_color,
              }}
              
              
            ></motion.div>

            <motion.div
              className="detail"
              style={{
                x: x_normal,
              }}
            >
              <div
                onClick={() => themenToggle("off")}
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
          </motion.div>

            <motion.div className="themen" style={{ x: x }}>
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

          <div className="tapbar ">
            <a className={`${isView == true ? "active" : null}`} onClick={() => setView(true)}>
              <div >
                <label>Vergleichsansicht Ansicht</label>
                <p>Betrachten Sie hier den originalen Brief  und vergleichen sie ihn mit der transkribierten Version.</p>
              </div>
              <img src={`../icons/vergleichsansicht.svg`} />
            </a>

            <a className={`${isView == false ? "active" : null}`} onClick={() => setView(false)}>
            <img src={`../icons/normalisierte-ansicht.svg`} />
              <div>
                <label>Vergleichsansicht Ansicht</label>
                <p>Betrachten Sie hier den originalen Brief  und vergleichen sie ihn mit der transkribierten Version.</p>
              </div>
            </a>
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
          <IdleTimer />
        </motion.div>
      </>
    );
  });
}

export function BouncingBall() {
  const dura = 1;
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
          backgroundColor: ["#000", "#838383"],
          opacity: [0, 0.8],
        }}
      >
       <img className="icon-swipe" src="../icons/swipe-back.svg" />
      </motion.span>
    </div>
  );
}
