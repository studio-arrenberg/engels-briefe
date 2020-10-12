import { motion } from "framer-motion";
import constants from "./constants";
import Layout from "./layout";
import Head from "next/head";
import Audio from "./audio";

export default function Brief_wrapper(props) {
  console.log(props.data);
  const data = props.data;

  return data.map((data, id) => {
    return (
      <Layout>
        <Head>
          <title>Brief</title>
        </Head>

        <motion.div
          className="brief_view"
          initial="initial"
          animate="enter"
          exit="exit"
          key={data.id}
          variants={constants.animation.section_exit}
        >
          <motion.div
            key={`${data.id}`}
            variants={constants.animation.post}
            layoutId={`${data.id}`}
          >
            {/* META */}
            <div className="meta">
              <div className="sender">
                <h2>
                  <span className="sender_name">{data.sender.name}</span>{" "}
                </h2>
                <h3>{data.sender.ort}</h3>
              </div>
              <img
                className="portrait"
                src={`../pictures/personen/thumbnails/Ida_Louise_Friederike_Noot.jpg`}
              />

              <img className="arrow_send" src={`../icons/back.svg`} />

              <img
                className="portrait"
                src={`../pictures/personen/Friedrich_Engels_sen.jpg`}
              />
              <div className="empfänger">
                <h2>
                  <span className="empfänger_name">{data.empfänger.name}</span>
                </h2>
                <h3>{data.empfänger.ort}</h3>
              </div>
            </div>

            {/* brief inhalt */}

            <div className="vergleichs-ansicht active">
              <div className="digitalisate">
                <img
                  className="kuvert_img"
                  src={`../../pictures/digitalisate/${data.digitalisate.cover}`}
                />
                <br />
                <img
                  src={`../../pictures/digitalisate/${data.digitalisate.page[0]}`}
                />
                <br />
                <img
                  src={`../../pictures/digitalisate/${data.digitalisate.page[1]}`}
                />
              </div>

              {/* children */}
              <div className="brieftext">
                <div>{props.children}</div>
              </div>
            </div>

            {/* children */}
            <div className="detail-ansicht "> {/* If you add themenmakierung-active you get a preview */}
              <div className="normalisiert">
                {props.children}

               
              </div>

              <div className="themen">
                <a>
                  <img src="../pictures/themen/liebe.jpg" />
                  <label>Liebe/ Ehe</label>
                </a>
                <a>
                  <img src="../pictures/themen/liebe.jpg" />
                  <label>Liebe/ Ehe</label>
                </a>
                <a>
                  <img src="../pictures/themen/liebe.jpg" />
                  <label>Liebe/ Ehe</label>
                </a>
              </div>
            </div>

            <div className="navigation">
              <a>
                <h3>Vergleichsansicht</h3>
              </a>

              <a>
                <h3>Detailansicht</h3>
              </a>
            </div>

            <div className="player">
              <Audio></Audio>
            </div>

            {/* <Audio2></Audio2> */}
            {/* <Audio3></Audio3> */}
            {/* <Audio4></Audio4> */}

            {/* orte */}

            {/* weitere briefe / themen */}
          </motion.div>
        </motion.div>
      </Layout>
    );
  });
}
