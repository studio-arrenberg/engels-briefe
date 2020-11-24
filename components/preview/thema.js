/*
*   Currently just for testing
*
*
*/


import { themen, familie, orte } from "../../public/data.json";
import {
    motion,
    useMotionValue,
    useDragControls,
    transform,
    useTransform,
  } from "framer-motion";
import constants from "../constants";
import Link from "next/link";

export default function Thema({ id }) {
    let thema = themen.filter((item) => {
      return item.id === id.toString();
    })
    thema = thema[0]
  
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
                    <p>{thema.exerpt.split('\n').map( (it, i) => <div key={'x'+i}>{it}</div> )}</p>
                  </div>
                </div>
              </a>
            </Link>
          </motion.div>
        </div>
      );
  }