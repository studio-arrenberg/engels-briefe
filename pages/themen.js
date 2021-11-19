import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import data from "../public/data.json";
import { motion, useViewportScroll } from "framer-motion";
import constants from "../components/constants";
import IdleTimer from "../components/IdleTimer";
import {useState} from "../components/store.js";

export default function Briefe() {

  const {ScrollThemen} = useState();
  
  React.useEffect(() => {
    if (ScrollThemen > 0 || ScrollThemen == 0) {
      window.scrollTo(ScrollThemen, 0);
    }
  });

  return (
    <Layout home>
      <Head>
        <title>Themen</title>
      </Head>

      <motion.div
        className="scrollable"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        <Thema />
      </motion.div>
      <IdleTimer/>
    </Layout>
  );
}

export function Thema() {

  const { scrollX } = useViewportScroll();

  return data.themen.map((data, id) => {
    return (
      <div className="item" key={`${data.id}`}>
        <motion.div
          whileTap={{ scale: constants.animation.interaction.whiletap }}
          key={`themen${data.id}`}
          variants={constants.animation.post}
          layoutId={`${data.id}`}
        >
          <Link href="/thema/[thema]" as={`/thema/${data.id}`} scroll={false} >
            <a onClick={() => useState.setState({ ScrollThemen: window.scrollX })}>
              <div key={data.id} className="item_preview">
                <img src={`../pictures/themen/thumbnails/${data.picture}`} />
                  

                <div className="item_description">
                  <h2>{data.title}</h2>
                  
                  <>{data.kurzbeschreibung.split('\n').map( (it, i) => <p key={'x'+i}>{it}</p> )}</>
                  
                  <span className="bildnachweis">{data.bildnachweis}</span>
                </div>
                
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    );
  });
}
