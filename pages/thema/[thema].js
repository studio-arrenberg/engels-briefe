import Layout from "../../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import data from "../../public/data.json";
import { motion } from "framer-motion";
import constants from "../../components/constants";
import Brief_view from "../../components/brief_view";
import IdleTimer from "../../components/IdleTimer";

export default function thema() {
  const router = useRouter();
  const { thema } = router.query;

  const briefe_list = data.briefe.filter(function (item) {
    return item.themen.id.includes(Number(thema));
  });

  const item = data.themen.filter((data) => {
    return data.id === thema;
  });

  console.log(briefe_list);

  return (
    <Layout>
      <Head>
        <title>Thema</title>
      </Head>

      <motion.div
        key="thema"
        layoutId="thema"
        className="scrollable first-large"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        <Thema data={item} />
        <Brief_view data={briefe_list} />
      </motion.div>
      <IdleTimer/>
    </Layout>
  );
}

export function Thema({ data }) {
  return data.map((data, id) => {
    return (
      <div className="item" key={`${data.id}`}>
        <motion.div
          key={`themen${data.id}`}
          variants={constants.animation.post}
          layoutId={`${data.id}`}
        >
          <div key={data.id} className="item_preview">
            <img src={`../pictures/themen/thumbnails/${data.picture}`} />
            <div className="item_description">
              <h2>{data.title}</h2>
              <p>{data.beschreibung.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</p>
              <span className="bildnachweis">{data.bildnachweis}</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  });
}
