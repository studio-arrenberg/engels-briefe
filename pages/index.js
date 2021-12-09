import Head from "next/head";
import Layout from "../components/layout";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { themen, familie, orte, briefe } from "../public/data.json";
import constants from "../components/constants";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "../components/store.js";

export default function Home() {
  useState.setState({ ScrollBriefe: 0, ScrollThemen: 0, ScrollFamilie: 0 });

  return (
    <Layout>
      <Head>
        <title>Engelsbriefe</title>
      </Head>
      <Link href="/briefe" scroll={false}>
        <a className="intro-stage-link"></a>
      </Link>

      <motion.div
        key="landing"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.landing_children}
      >
        <Link href="/briefe" scroll={false}>
            <a className="">
        <div className="intro-stage">
        
          
          <h1 lassName="startup-information">Briefe der Familie Engels</h1>
          <p className="startup-information">
            Erhalten Sie anhand von 18 ausgewählten Briefen aus dem Zeitraum von
            1791 bis 1858 Einblick in das Familien- und Geschäftsleben der
            Eltern und Großeltern von Friedrich Engels.
          </p>
          <a className="button startbutton startup-information">Korrespondenz entdecken</a>
          
          <Link href="/impressum" scroll={false}>
            <a className="impressum-link">Über das Projekt</a>
          </Link>
          
        </div>
        </a>
          </Link>
        

        <div className="intro-stage-background"></div>

        <div className="no-scroll">
          <div className="scrollable-index">
            {/* Reihe 1 */}
            <Brief id="1" />
            <Person id="8" />
            <Brief id="22" />
            <Thema id="2" />
            <Brief id="68" />
            <Person id="6" />
            <Ort id="5" />
            <Person id="4" />
            <Brief id="255" />
            <Ort id="9" />
            <Brief id="295" />
            <Brief id="308" />

            {/* Reihe 2 */}
            <Thema id="1" />
            <Brief id="4" />
            <Ort id="2" />
            <Brief id="29" />
            <Person id="5" />
            <Brief id="75" />
            <Brief id="169" />
            <Person id="10" />
            <Brief id="265" />
            <Thema id="3" />
            <Ort id="11" />
            <Brief id="342" />

            {/* Reihe 3 */}
            <Person id="5" />
            <Ort id="1" />
            <Person id="3" />
            <Ort id="4" />
            <Brief id="71" />
            <Person id="9" />
            <Ort id="6" />
            <Brief id="235" />
            <Ort id="8" />
            <Brief id="285" />
            <Brief id="307" />
            <Ort id="12" />

            {/* Reihe 4 */}
            <Brief id="21" />
            <Person id="2" />
            <Ort id="3" />
            <Person id="5" />
            <Ort id="7" />
            <Brief id="130" />
            <Ort id="10" />
            <Ort id="13" />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export function Ort({ id }) {
  let item = orte.filter((item) => {
    return item.id === id.toString();
  });
  item = item[0];

  return (
    <div className="item" key={item.id}>
      <motion.div
        key={`themen${item.id}`}
        variants={constants.animation.post}
        layoutId={`${item.id}`}
      >
        {/* <Link href="/thema/[thema]" as={`/thema/${item.id}`}> */}
        {/* <a> */}
        <div key={item.id} className="item_preview">
          <img
            src={`../pictures/orte/thumbnails-jpg-50-png-40/${item.picture}`}
          />
          <div className="item_description">
            {/* <h2>{item.title}</h2> */}
            {/* <p>{item.beschreibung.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</p> */}
          </div>
        </div>
        {/* </a> */}
        {/* </Link> */}
      </motion.div>
    </div>
  );
}

export function Brief({ id }) {
  let item = briefe.filter((item) => {
    return item.id === id.toString();
  });
  item = item[0];

  return (
    <div className="item" key={`briefe-${item.id}`}>
      <Link href={`/brief/${item.id}`} as={`/brief/${item.id}`}>
        <a>
          <motion.div
            key={`brief-motion-${item.id}`}
            className="item_preview"
            variants={constants.animation.post}
            layoutId={`${item.id}`}
          >
            {/* bild */}
            {item.digitalisate.page.map((item, index) => (
              <img
                src={`../../pictures/digitalisate/comp-600px_60p/${item}`}
                key={index}
              />
            ))}

            {/* <div className="item_description">
              <h4>{item.datum}</h4>
              <h2>
                <span className="sender_name">{item.sender.name}</span>
                <br></br>
                 <span className="empfänger_name">
                  <img className="small-icon" src="../icons/forward.svg" />
                  {item.empfänger.name}
                  </span>
              </h2>
              {/* themen */}
            {/* {item.themen.name.map((item, index) => (
                <p>{item}</p>
              ))}
            </div>
             */}
          </motion.div>
        </a>
      </Link>
    </div>
  );
}

export function Person({ id }) {
  let item = familie.filter((item) => {
    return item.id === id.toString();
  });
  item = item[0];

  return (
    <div className="item" key={`${item.id}`}>
      <motion.div
        key={`familie${item.id}`}
        variants={constants.animation.post}
        layoutId={`${item.id}`}
      >
        <Link href="/person/[person]" as={`/person/${item.id}`}>
          <a>
            <div className="item_preview">
              <img
                src={`../pictures/personen/thumbnails-jpg-50-png-40/${item.picture}`}
              />
              {/* <div className="item_description">
                <p>{item.lebzeit}</p>

                <h2>{item.name}</h2>
                <p>{item.beschreibung}</p>
              </div> */}
            </div>
          </a>
        </Link>
      </motion.div>
    </div>
  );
}

export function Thema({ id }) {
  let thema = themen.filter((item) => {
    return item.id === id.toString();
  });
  thema = thema[0];

  return (
    <div className="item" key={thema.id}>
      <motion.div
        key={`themen${thema.id}`}
        variants={constants.animation.post}
        layoutId={`${thema.id}`}
      >
        <Link href="/thema/[thema]" as={`/thema/${thema.id}`}>
          <a>
            <div key={thema.id} className="item_preview">
              <img src={`../pictures/themen/thumbnails/${thema.picture}`} />
              <div className="item_description">
                <h2>{thema.title}</h2>
                {/* <p>
                  {thema.exerpt.split("\n").map((it, i) => (
                    <div key={"x" + i}>{it}</div>
                  ))}
                </p> */}
              </div>
            </div>
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
