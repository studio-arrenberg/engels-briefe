import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import data from '../public/data.json'
import { useViewportScroll, motion, useTransform, useMotionValue, useSpring } from "framer-motion"
import constants from '../components/constants'
import Brief_view from '../components/brief_view'
import React, { useState, useEffect, useRef } from 'react';


// const y = 0;
// const y1 = 0;
// const y2 = 0;

export default function Page() {

  // const { scrollX } = useViewportScroll();

  // const ref = useRef(null);
  // useEffect(() => {
  //   console.log('width', ref.current ? ref.current.offsetWidth : 0);
  // }, [ref.current]);
  
  return (
      <Layout home >


        <Head>
          <title>Briefe</title>
        </Head>


          <motion.div className="scrollable" initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit}>            
          
            <Brief_view data={data.briefe}/>
            
          </motion.div>
        

        <Timeline2 />

      </Layout>
  )

}

export function Scrolllistener() {
  const { scrollX } = useViewportScroll();
  const { scrollXProgress } = useViewportScroll()
  const [lastXPos, setLastXPos] = React.useState(0);

  const x = scrollXProgress
  // const xRange = [-1, 0, 5, 5.5]
  const xRange = [-1, 0, 0.05, 0.055]
  const scaleRange = [0.2, 1, 1, 0.2]
  const scale = useTransform(x, xRange, scaleRange)

  React.useEffect(() => {
    function handleScroll() {
      console.log(scrollX)
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastXPos]);

  return (
    <>
    </>
  )
}




export function Timeline2() {

  // const { scrollX } = data 
  const { scrollX } = useViewportScroll();
  const { scrollXProgress } = useViewportScroll()


  // const x = useMotionValue(0)
  const x = scrollX
  const pagex = 14140 //9140
  const letters = 18
  const leaverange = 1.3
  // const xRange = [-1, 0, 5, 5.5]
  // const xRange = [-1, 0, 0.05, 0.055]
  
  const scaleRange = [0.7, 1, 1, 0.7]
  const opacityRange = [0.2, 1, 1, 0.2]

  const xRange1 = [-10, (pagex / letters)*0, (pagex / letters)*1 , ((pagex / letters)*1) * leaverange]
  const scalex1 = useTransform(x, xRange1, scaleRange)
  const ox1 = useTransform(x, xRange1, opacityRange)

  const xRange2 = [-1, (pagex / letters)*1, (pagex / letters)*2 , ((pagex / letters)*2) *leaverange ]
  const scalex2 = useTransform(x, xRange2, scaleRange)
  const ox2 = useTransform(x, xRange2, opacityRange)

  const xRange3 = [-1, (pagex / letters)*2, (pagex / letters)*3 , ((pagex / letters)*3) *leaverange]
  const scalex3 = useTransform(x, xRange3, scaleRange)
  const ox3 = useTransform(x, xRange3, opacityRange)

  const xRange4 = [-1, (pagex / letters)*3, (pagex / letters)*4 , ((pagex / letters)*4) *leaverange]
  const scalex4 = useTransform(x, xRange4, scaleRange)
  const ox4 = useTransform(x, xRange4, opacityRange)

  const xRange5 = [-1, (pagex / letters)*4, (pagex / letters)*5 , ((pagex / letters)*5) *leaverange]
  const scalex5 = useTransform(x, xRange5, scaleRange)
  const ox5 = useTransform(x, xRange5, opacityRange)

  const xRange6 = [-1, (pagex / letters)*5, (pagex / letters)*6 , ((pagex / letters)*6) *leaverange]
  const scalex6 = useTransform(x, xRange6, scaleRange)
  const ox6 = useTransform(x, xRange6, opacityRange)

  const xRange7 = [-1, (pagex / letters)*6, (pagex / letters)*7 , ((pagex / letters)*7) *leaverange]
  const scalex7 = useTransform(x, xRange7, scaleRange)
  const ox7 = useTransform(x, xRange7, opacityRange)

  const xRange8 = [-1, (pagex / letters)*7, (pagex / letters)*8 , ((pagex / letters)*8) *leaverange]
  const scalex8 = useTransform(x, xRange8, scaleRange)
  const ox8 = useTransform(x, xRange8, opacityRange)

  const xRange9 = [-1, (pagex / letters)*8, (pagex / letters)*8 , ((pagex / letters)*9) *leaverange]
  const scalex9 = useTransform(x, xRange9, scaleRange)
  const ox9 = useTransform(x, xRange9, opacityRange)

  const xRange10 = [-1, (pagex / letters)*9, (pagex / letters)*9 , ((pagex / letters)*10) *leaverange]
  const scalex10 = useTransform(x, xRange10, scaleRange)
  const ox10 = useTransform(x, xRange10, opacityRange)

  const xRange11 = [-1, (pagex / letters)*10, (pagex / letters)*10 , ((pagex / letters)*11) *leaverange]
  const scalex11 = useTransform(x, xRange11, scaleRange)
  const ox11 = useTransform(x, xRange11, opacityRange)

  const xRange12 = [-1, (pagex / letters)*11, (pagex / letters)*11 , ((pagex / letters)*12) *leaverange]
  const scalex12 = useTransform(x, xRange12, scaleRange)
  const ox12 = useTransform(x, xRange12, opacityRange)

  const xRange13 = [-1, (pagex / letters)*12, (pagex / letters)*12 , ((pagex / letters)*13) *leaverange]
  const scalex13 = useTransform(x, xRange13, scaleRange)
  const ox13 = useTransform(x, xRange13, opacityRange)

  const xRange14 = [-1, (pagex / letters)*13, (pagex / letters)*13 , ((pagex / letters)*14) *leaverange]
  const scalex14 = useTransform(x, xRange14, scaleRange)
  const ox14 = useTransform(x, xRange14, opacityRange)

  const xRange15 = [-1, (pagex / letters)*14, (pagex / letters)*14 , ((pagex / letters)*15) *leaverange]
  const scalex15 = useTransform(x, xRange15, scaleRange)
  const ox15 = useTransform(x, xRange15, opacityRange)

  const xRange16 = [-1, (pagex / letters)*15, (pagex / letters)*15 , ((pagex / letters)*16) *leaverange]
  const scalex16 = useTransform(x, xRange16, scaleRange)
  const ox16 = useTransform(x, xRange16, opacityRange)

  const xRange17 = [-1, (pagex / letters)*16, (pagex / letters)*16 , ((pagex / letters)*17) *leaverange]
  const scalex17 = useTransform(x, xRange17, scaleRange)
  const ox17 = useTransform(x, xRange17, opacityRange)

  const xRange18 = [-1, (pagex / letters)*17, (pagex / letters)*17 , ((pagex / letters)*18) *leaverange]
  const scalex18 = useTransform(x, xRange18, scaleRange)
  const ox18 = useTransform(x, xRange18, opacityRange)


  // console.log(x)



  return (
    <>
      <motion.div className="timeline">

        <motion.div className="linesmall" style={{ scale:scalex1, opacity:ox1 }} ></motion.div>
        <motion.div className="linesmall"  style={{ scale:scalex2, opacity:ox2}} ></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex3, opacity:ox3 }} ></motion.div>
        <motion.div className="linebig" style={{ scale:scalex4, opacity:ox4 }}>
          <p>I. Die Großeltern</p>
        </motion.div>
        <motion.div className="linesmall" style={{ scale:scalex5, opacity:ox5 }} ></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex6, opacity:ox6 }} ></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex7, opacity:ox7 }} ></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex8, opacity:ox8 }} ></motion.div>
        <motion.div className="linebig" style={{ scale:scalex9, opacity:ox9 }}>
          <p>II. Die Eltern</p>
        </motion.div>
        <motion.div className="linesmall" style={{ scale:scalex10, opacity:ox10 }}></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex11, opacity:ox11 }}></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex12, opacity:ox12 }}></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex13, opacity:ox13 }}></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex14, opacity:ox14 }}></motion.div>
        <motion.div className="linebig" style={{ scale:scalex15, opacity:ox15 }}>
          <p>III. Friedrich Engels</p>
        </motion.div>
        <motion.div className="linesmall" style={{ scale:scalex16, opacity:ox16 }}></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex17, opacity:ox17 }}></motion.div>
        <motion.div className="linesmall" style={{ scale:scalex18, opacity:ox18}}></motion.div>

      </motion.div>
    </>
  )

}

export function Timeline() {
  
  const [elementTop, setElementTop] = useState(0);
  const { scrollX, scrollXProgress } = useViewportScroll();
  const y = useSpring(useTransform(scrollX, value => value * 0.95), { stiffness: 1 })
  const y1 = useTransform(scrollX, value => value * 0.95)
  const y2 = useTransform(scrollX, value => value * 0.95)
  // console.log(y1);

  const y3 = useTransform(scrollX, [elementTop, elementTop + 1], [0, +1], {
    clamp: false
  });

  const x = scrollXProgress
  const xRange = [-1, 0, 0.05, 0.055]
  const scaleRange = [0.2, 1, 1, 0.2]
  const scale = useTransform(x, xRange, scaleRange)
  const [lastXPos, setLastXPos] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      console.log(y1)
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastXPos]);


  return (
    <>
    <motion.div initial="initial" animate="enter" exit="exit" variants={constants.animation.timeline}>

      <motion.div className={utilStyles.line} style={{ x: y3 }} >
        <p className={utilStyles.line_name} >Hello</p>
      </motion.div>

      <motion.div className={utilStyles.line} style={{ x: y3 }} >
        <p className={utilStyles.line_name} >World</p>
      </motion.div>

      <motion.div className={utilStyles.line} style={{ x: y1 }} >
        <p className={utilStyles.line_name} >Dude</p>
      </motion.div>

    </motion.div>
    </>
  );
}