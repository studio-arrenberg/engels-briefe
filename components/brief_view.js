import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import constants from "./constants";

export default function Brief({ data }) {
  // const url = data.scan.page[0]
  return data.map((data, id) => {
    return (
      <div className="item" key={`${data.id}`}>
        {/* <Link href="/briefx/[brief]" as={`/briefx/${data.id}`}> */}
        <Link href={`/brief/${data.id}`} as={`/brief/${data.id}`}>
          <motion.div
            div
            key={`${data.id}`}
            className="item_preview"
            variants={constants.animation.post}
            layoutId={`${data.id}`}
          >
            <img
              src={`../pictures/digitalisate/${data.digitalisate.page[0]}`}
            />
            <img
              src={`../pictures/digitalisate/${data.digitalisate.page[1]}`}
            />

            <div className="item_description">
              <h4>{data.datum}</h4>
              <h2>
                <span className="sender_name">{data.sender.name}</span> an{" "}
                <br></br> <span className="empfänger_name"></span>
                {data.empfänger.name}
              </h2>
              <a>Liebe/ Ehe, Thema</a>
              <a className="arrow-back">
                {" "}
                &gt;
                {/* <img src={`../icons/back.svg`}/> */}
              </a>
              {/* <p>{data.text}</p> */}
            </div>
          </motion.div>
        </Link>
      </div>
    );
  });
}
