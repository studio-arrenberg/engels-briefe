import Head from "next/head";
import Layout from "../components/layout";
import ChangeLog from "../components/change-log";
import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useDragControls,
  transform,
  useTransform,
} from "framer-motion";
import Link from "next/link";

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>Engelsbriefe</title>
      </Head>

      <main>
        <ChangeLog />
      </main>

      <BouncingBall/>

      <Box/>
    </Layout>
  );
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


export const Box = () => {
  const x = useMotionValue(0);

  const inputRange = [800, 1100];
  const outputRange = [0, 100];
  // const y = useTransform(x, inputRange, outputRange);
  const y = useTransform(x, (latestX) => latestX * 0.1);
  // const wi = transform(x, 800, 1100, 10, 100);

  const input = [-200, 0, 200];
  const output = [0, 1, 0];
  const output_w = [10, 100, 10];
  const opacity = useTransform(x, input, output);
  const wid = useTransform(x, [-200, 0, 200], [10, 100, 10]);

  return (
    <>
      <div className="wrap">
        <motion.div
          drag="x"
          className="high"
          style={{
            backgroundColor: "red",
            width: wid,
            height: 200,
            margin: 10,
            // opacity: opacity,
            x,
          }}
          dragConstraints={{ left: -600, right: 0 }}
          onDrag={(event, info) =>
            console.log(
              "raw: " +
                info.point.x +
                " trans: " +
                transform(info.point.x, inputRange, outputRange)
            )
          }
        />
        <motion.div
          className="high"
          style={{
            backgroundColor: "red",
            width: 200,
            height: 200,
            margin: 10,
            opacity: 0.4,
            x: y,
          }}
        />
      </div>
    </>
  );
};


