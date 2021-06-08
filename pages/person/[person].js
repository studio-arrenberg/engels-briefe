import Layout from "../../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import data from "../../public/data.json";
import { motion } from "framer-motion";
import constants from "../../components/constants";
import Brief_view from "../../components/brief_view";
import IdleTimer from "../../components/IdleTimer";


export default function person() {
  const router = useRouter();
  const { person } = router.query;

  // const briefe_list = data.briefe.filter(function (item) {
  //   return item.id.includes(Number(person));
  // });

  const briefe_list = data.briefe.filter(function (item) {
    return item.sender.id.includes(Number(person)) | item.empfänger.id.includes(Number(person));
  });

  const item = data.familie.filter((data) => {
    return data.id === person;
  });

  console.log("person ID: " + person);
  console.log(briefe_list);

  return (
    <Layout>
      <Head>
        <title>Person</title>
      </Head>

      <motion.div
        className="scrollable first-large"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        <Familie data={item} />
        <Brief_view data={briefe_list} />
      </motion.div>
      <IdleTimer/>
    </Layout>
  );
}

export function Familie({ data }) {
  return data.map((data) => {
    return (
      <div className="item" key={`${data.id}`}>
        <motion.div
          key={`familie${data.id}`}
          variants={constants.animation.post}
          layoutId={`${data.id}`}
        >
          <div className="item_preview">
            <img src={`../pictures/personen/thumbnails-jpg-50-png-40/${data.picture}`} />
            <span className="bildnachweis">{data.bildnachweis}</span>

            <div className="item_description">
              <h2>{data.name}</h2>
              <p>{data.beschreibung}</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  });
}
