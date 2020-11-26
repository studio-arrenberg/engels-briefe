import Head from "next/head";
import Layout from "../components/layout";
import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useDragControls,
  transform,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import constants from "../components/constants";

export default function Home() {
  const x = useMotionValue(0);

  const x_fast = useTransform(x, (latestX) => latestX * 1.2);
  const x_slow = useTransform(x, (latestX) => latestX * 0.8);

  const [handlex, setHandelx] = useState(0);

  const input = [500, 1500]
  const output = [600, 1500]
  const x_dif = useTransform(x, input, output)

  const input_w = [-400, 0, 400]
  const output_w = [10, 100, 10]
  // const opacity = useTransform(x, input, output)
  const width_handle = useTransform(x, input_w, output_w)

  const wid = useTransform(x, [-200, 0, 200], [10, 100, 10])


  return (
    <Layout>
      <Head>
        <title>Swipe Test</title>
      </Head>

      <motion.div className="swipewrapper"
        key="swipewrapper"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        
        {/* vergleich */}

        <motion.div className="vergleich">
          <motion.div
            key="digitalisat1"
            className="vergleich-l"
            style={{
              backgroundColor: "red",
              margin: 10,
              opacity: 0.4,
              x: x_slow,
            }}
          > 
            <h2>Hello</h2>
          </motion.div>
          <motion.div
            key="digitalisat2"
            className="vergleich-r"
            style={{
              backgroundColor: "red",
              margin: 10,
              opacity: 0.4,
              x: x_fast,
            }}
          >
            <h2>World</h2>
          </motion.div>

        </motion.div> 

        {/* handlebar */}
        <motion.div
          drag="x"
          className="handlebar"
          style={{
            backgroundColor: "red",
            // width: wid,
            // opacity: opacity,
            x
          }}
          dragConstraints={{ left: -3360, right: 0 }}
          // onDrag={(event, info) => console.log("raw: " + info.point.x + " trans: " + transform(info.point.x, inputRange, outputRange))}
        >
         
        </motion.div>

        {/* detailansicht */}
        <motion.div
          className="detail"
          style={{
            x: x,
          }}
        >
          <div className="detail-view">
            <h2>Detailansicht</h2>

          </div>

          <div className="themen-navi">

          </div>
        </motion.div>

      </motion.div>

    </Layout>
  );
}
