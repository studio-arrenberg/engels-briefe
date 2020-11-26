import Head from "next/head";
import Layout from "../components/layout";
import ChangeLog from "../components/change-log";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { themen, familie, orte, briefe } from "../public/data.json";
// import Thema from "../components/preview/thema";
import constants from "../components/constants";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Engelsbriefe</title>
      </Head>

     <div className="intro-stage">
       <h1>Briefe der Familie Engels</h1>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <a className="button">Korrespondenz entdecken</a> 
    </div>
    <div className="intro-stage-background"></div>
      <div className="scrollable-index">
        <Brief id="1" />
        <Thema id="1" />
        <Ort id="3" />
        <Person id="1" />
        <Person id="1" />
        <Brief id="4" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Thema id="2" />
        <Ort id="1" />
        <Person id="1" />
        <Person id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Thema id="2" />
        <Ort id="1" />
        <Person id="1" />
        <Person id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Thema id="2" />
        <Ort id="1" />
        <Person id="1" />
        <Person id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Thema id="2" />
        <Ort id="1" />
        <Person id="1" />
        <Person id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        <Brief id="1" />
        

        </div>



      {/* <div className="scrollable-index">
      <Thema id="2" />
      <Ort id="1" />
      <Person id="1" />

        <div className="test">2</div>
        <div className="test">3</div>
        <div className="test">4</div>
        <div className="test">5</div>
        <div className="test">6</div>
        <div className="test">7</div>
        <div className="test">8</div>
        <div className="test">9</div>
        <div className="test">10</div>
        <div className="test">11</div>
        <div className="test">12</div>
        <div className="test">13</div>
        <div className="test">14</div>
        <div className="test">15</div>
        <div className="test">16</div>
        <div className="test">17</div>
        <div className="test">18</div>
        <div className="test">19</div>
        <div className="test">20</div>
        <div className="test">21</div>
        <div className="test">22</div>
        <div className="test">23</div>
        <div className="test">24</div>
        <div className="test">25</div>
        <div className="test">26</div>
        <div className="test">27</div>
        <div className="test">28</div>
        <div className="test">29</div>
        <div className="test">30</div>
        <div className="test">31</div>
        <div className="test">32</div>
        <div className="test">33</div>
        <div className="test">34</div>
        <div className="test">35</div>
        <div className="test">36</div>
        <div className="test">37</div>
        <div className="test">38</div>
        <div className="test">39</div>
        <div className="test">40</div>
        <div className="test">41</div>
        <div className="test">42</div>
        <div className="test">43</div>
        <div className="test">44</div>
        <div className="test">45</div>
      <Brief id="1" />
      <Brief id="1" />
      <Brief id="1" />
      <Brief id="1" />
      <Brief id="1" />
      <Brief id="1" />
      <Brief id="1" />
      <Brief id="1" />
      </div> */}
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
          <img src={`../pictures/orte/thumbnails/${item.picture}`} />
          <div className="item_description">
            <h2>{item.title}</h2>
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
            div
            key={`brief-motion-${item.id}`}
            className="item_preview"
            variants={constants.animation.post}
            layoutId={`${item.id}`}
          >
            {/* bild */}
            {item.digitalisate.page.map((item, index) => (
              <img src={`../../pictures/digitalisate/${item}`} key={index} />
            ))}

            <div className="item_description">
              <h4>{item.datum}</h4>
              <h2>
                <span className="sender_name">{item.sender.name}</span> an{" "}
                <br></br> <span className="empfänger_name"></span>
                {item.empfänger.name}
              </h2>
              {/* themen */}
              {/* {item.themen.name.map((item, index) => (
                <p>{item}</p>
              ))} */}
            </div>
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
              <img src={`../pictures/personen/thumbnails/${item.picture}`} />
              <div className="item_description">
              <p>{item.lebzeit}</p>

                <h2>{item.name}</h2>
                {/* <p>{item.beschreibung}</p> */}
              </div>
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
