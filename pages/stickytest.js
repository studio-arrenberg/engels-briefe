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
<motion.div className="swipewrapper">
      <motion.div className="sticky" >
        TEst
        
      </motion.div>

      <h1>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </h1>
      </motion.div>


  </Layout>
);
}
