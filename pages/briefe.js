import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import data from "../public/data.json";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useSpring,
  useAnimation,
} from "framer-motion";
import constants from "../components/constants";
import Brief_view from "../components/brief_view";
import React, { useState, useEffect, useRef, Component } from "react";


export default function Page() {


  //   const controls = useAnimation()
  // controls.start({ y: -500 })

  // function onScroll(info) {
  //   console.log(info.offset, info.velocity);
  // }

  // const isIdle = useIdle({ timeToIdle: 1000 })
  return (
    <Layout home>
      <Head>
        <title>Briefe</title>
      </Head>
      <motion.div
        key="briefe-slider"
        className="scrollable"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        {/* <div>{isIdle ? "Are you there?" : "Hello there!"}</div> */}

        <Brief_view data={data.briefe} />
      </motion.div>
      <Timeline />
    </Layout>
  );
}

export function Timeline() {
  // const { scrollX } = data
  const { scrollX } = useViewportScroll();
  const { scrollXProgress } = useViewportScroll();

  // const x = useMotionValue(0)
  const x = scrollX;
  const pagex = 14140; //9140
  const letters = 18;
  const leaverange = 1.3;

  // console.log(x)

  function Line({ numb, text }) {
    // note: study function and improve
    const scaleRange = [0.7, 1, 1, 0.7];
    const opacityRange = [0.2, 1, 1, 0.2];
    let initial = -10;

    if (numb == 1) {
      initial = -10;
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
        <Line numb={15} text={"III. Friedrich Engels"} />
        <Line numb={16} />
        <Line numb={17} />
        <Line numb={18} />
      </motion.div>
    </>
  );
}

