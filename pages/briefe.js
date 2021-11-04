import Head from "next/head";
import Layout from "../components/layout";
import data from "../public/data.json";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import constants from "../components/constants";
import Brief_view from "../components/brief_view";
import React from "react";
import IdleTimer from "../components/IdleTimer";
import {useState} from "../components/store.js";


export default function Page() {

  const {ScrollBriefe} = useState();
  
  React.useEffect(() => {
    if (ScrollBriefe > 0 || ScrollBriefe == 0) {
      window.scrollTo(ScrollBriefe, 0);
    }
  });

  return (
    <Layout home>
      <Head>
        <title>Briefe</title>
      </Head>
      
      {/* for testing */}
      {/* <div style={{zIndex:10000000, position:'absolute', top:'500px', left:'500px'}}>
        <h1>Scroll: {ScrollBriefe}</h1>
      </div> */}
      
      <motion.div
        key="briefe-slider"
        className="scrollable"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        <Brief_view data={data.briefe} />

        
      </motion.div>

      
      <Timeline />
      <IdleTimer/>
    </Layout>
  );
}

export function Timeline() {
  const { scrollX } = useViewportScroll();

  var test = test;
  if (!test) {
    test = 1;
  }
  test = test + 1;
  console.log(test);

  const x = scrollX;
  const pagex = 14140 - 4500; // original:14140 old:9140
  const letters = 18;
  const leaverange = 1.3;

  function Line({ numb, text }) {
    // note: study function and improve
    const scaleRange = [0.7, 1, 1, 0.7];
    const opacityRange = [0.2, 1, 1, 0.2];
    let initial = 10;

    if (numb == 1) {
      initial = 10;
    }

    const ra = [
      initial,
      (pagex / letters) * (numb - 1),
      (pagex / letters) * numb,
      (pagex / letters) * numb * leaverange,
    ];
    const sc = useTransform(x, ra, scaleRange);
    const ox = useTransform(x, ra, opacityRange);

    let cl;
    if (!text) {
      cl = "linesmall";
    } else {
      cl = "linebig";
    }

    return (
      <motion.div className={cl} style={{ scale: sc, opacity: ox }}>
        <p>{text}</p>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div className="timeline">
        <Line numb={1} />
        <Line numb={2} />
        <Line numb={3} />
        <Line numb={4} text={"I. Die Großeltern"} />
        <Line numb={5} />
        <Line numb={6} />
        <Line numb={7} />
        <Line numb={8} />
        <Line numb={9} text={"II. Die Eltern"} />
        <Line numb={10} />
        <Line numb={11} />
        <Line numb={12} />
        <Line numb={13} />
        <Line numb={14} />
        <Line numb={15} text={"III. Friedrich Engels jun."} />
        <Line numb={16} />
        <Line numb={17} />
        <Line numb={18} />
      </motion.div>
    </>
  );
}
