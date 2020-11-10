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
  // follow variable
  // let xs = 0;

  // var x;
  // const xs = useMotionValue(1);
  // const inputRange = [800, 1100];
  // const outputRange = [1, 3];
  // const opacity = useTransform(xs, inputRange, outputRange);
  // x =
  // x = xs * 0.9;

  // const [count, setCount] = useState(0);

  // const input = [-200, 0, 200]
  // const output = [0, 1, 0]
  // const opacity = useTransform(x, input, output)
  // sx = x * 0.8;


  return (
    <Layout home>
      <Head>
        <title>Engelsbriefe</title>
      </Head>

      <main>
        <ChangeLog />
      </main>

      {/* <div className="wrap">
        <motion.div style={{ x: xs }} className="high passiv">
          Hello
        </motion.div>
        <motion.div style={{ scale : opacity }} className="high passiv">
          slow
        </motion.div>

        <motion.div
          drag="x"
          className="high"
          style={{
            backgroundColor: "red",
            width: 200,
            height: 200,
            x: xs,
            margin: 10,
          }}
          dragConstraints={{ left: -200, right: 0 }}
          onDrag={(event, info) => console.log("raw: " + info.point.x + " trans: " + transform(info.point.x, inputRange, outputRange))}
        ></motion.div>

        <motion.div style={{ x : xs }} className="high passiv">
          World
        </motion.div>
      </div> */}



      <Box/>
    </Layout>
  );
}

export const Box = () => {
  const x = useMotionValue(0);
  

  const inputRange = [800, 1100];
  const outputRange = [0, 100];
  // const y = useTransform(x, inputRange, outputRange);
  const y = useTransform(x, (latestX) => latestX * 0.1);
  // const wi = transform(x, 800, 1100, 10, 100);

  const input = [-200, 0, 200]
  const output = [0, 1, 0]
  const output_w = [10, 100, 10]
  const opacity = useTransform(x, input, output)
  const wid = useTransform(x, [-200, 0, 200], [10, 100, 10])

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
        x
      }}
      dragConstraints={{ left: -600, right: 0 }}
      onDrag={(event, info) => console.log("raw: " + info.point.x + " trans: " + transform(info.point.x, inputRange, outputRange))}
    />
    <motion.div
      className="high"
      style={{
        backgroundColor: "red",
        width: 200,
        height: 200,
        margin: 10,
        opacity: 0.4,
        x: y
      }}
    />
    </div>
    </>
  )
};
