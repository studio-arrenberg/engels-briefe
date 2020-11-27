import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import data from "../public/data.json";
import { motion } from "framer-motion";
import constants from "../components/constants";

export default function Briefe() {
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
    </Layout>
  );
}

export function Thema() {

  return data.themen.map((data, id) => {
    return (
      <div className="item" key={`${data.id}`}>
        <motion.div
          whileTap={{ scale: constants.animation.interaction.whiletap }}
          key={`themen${data.id}`}
          variants={constants.animation.post}
          layoutId={`${data.id}`}
        >
          <Link href="/thema/[thema]" as={`/thema/${data.id}`}>
            <a>
              <div key={data.id} className="item_preview">
                <img src={`../pictures/themen/thumbnails/${data.picture}`} />
                <div className="item_description">
                  <h2>{data.title}</h2>
                  <p>{data.kurzbeschreibung.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</p>
                </div>
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    );
  });
}
