import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import data from "../public/data.json";
import { motion, useViewportScroll } from "framer-motion";
import constants from "../components/constants";
import IdleTimer from "../components/IdleTimer";
import {useState} from "../components/store.js";

export default function Briefe() {

  const {ScrollFamilie} = useState();
  
  React.useEffect(() => {
    if (ScrollFamilie > 0 ||ScrollFamilie == 0) {
      window.scrollTo(ScrollFamilie, 0);
    }
  });

  return (
    <Layout home>
      <Head>
        <title>Familie</title>
      </Head>

      <motion.div
        className="scrollable"
        key="familie"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        <Familie data={data} />
      </motion.div>
      <IdleTimer />
    </Layout>
  );
}

export function Familie({ data }) {

  const { scrollX } = useViewportScroll();

  return data.familie.map((data) => {
    return (
      <div className="item" key={`${data.id}`}>
        <motion.div
          whileTap={{ scale: constants.animation.interaction.whiletap }}
          key={`familie${data.id}`}
          variants={constants.animation.post}
          layoutId={`${data.id}`}
        >
          <Link
            href="/person/[person]"
            as={`/person/${data.id}`}
            scroll={false}
          >
            <a onClick={() => useState.setState({ ScrollFamilie: window.scrollX })}>
              <div className="item_preview">
                <img src={`../pictures/personen/thumbnails-jpg-50-png-40/${data.picture}`} className="picture"/>

                <div className="item_description">
                  <h2>{data.name}</h2>
                  <p>{data.lebzeit}</p>
                  <p>{data.kurzbeschreibung}</p>
                  <span className="bildnachweis">{data.bildnachweis}</span>
                  <Count id={data.id} />
                </div>
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    );
  });
}

export function Count({ id }) {
  let number = Object.keys(
    data.briefe.filter((data) => {
      return data.sender.id === id;
    })
  ).length;

  let numberx = Object.keys(
    data.briefe.filter((data) => {
      return data.empfänger.id === id;
    })
  ).length;

  return (
    <>
      <br></br>
      <p className="postfach">
        {number > 0 && (
          <>
            <img className="small-icon" src="../icons/send.svg" /> {number}
          </>
        )}
        {numberx > 0 && (
          <>
            <img className="small-icon" src="../icons/recive.svg" /> {numberx}
          </>
        )}
      </p>
      <p></p>
    </>
  );
}
