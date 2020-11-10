import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import constants from "./constants";
import Image from 'next/image'


export default function Brief({ data }) {

  console.log(data);

  return data.map((data, id) => {
    return (
      <div className="item" key={`briefe-${data.id}`}>
        <Link href={`/brief/${data.id}`} as={`/brief/${data.id}`}>
          <a>
            <motion.div
              div
              key={`brief-motion-${data.id}`}
              className="item_preview"
              variants={constants.animation.post}
              layoutId={`${data.id}`}
            >

              {/* bild */}
              {data.digitalisate.page.map((item, index) => (
                <img src={`../../pictures/digitalisate/${item}`} key={index} />
              ))}

              <div className="item_description">
                
                <h4>{data.datum}</h4>
                <h2>
                  <span className="sender_name">{data.sender.name}</span> an{" "}
                  <br></br> <span className="empfänger_name"></span>
                  {data.empfänger.name}
                </h2>
                {/* themen */}
                {data.themen.name.map((item, index) =>(
                  <p>{item}</p>
                ))}

              </div>
            </motion.div>
          </a>
        </Link>
      </div>
    );
  });
}
