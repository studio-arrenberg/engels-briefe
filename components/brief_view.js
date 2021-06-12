import Link from "next/link";
import { motion, useViewportScroll } from "framer-motion";
import constants from "./constants";
import { FiArrowRight } from "react-icons/fi";
import { themen, familie, orte } from "../public/data.json";
import {useState} from "../components/store.js";

export default function Brief({ data }) {
  // digitalisate rotate random
  const min = -2;
  const max = 2;

  console.log(data);

  const { scrollX } = useViewportScroll();
  // console.log(scrollX);

  return data.map((data, id) => {
    return (
      <div className="item" key={`briefe-${data.id}`}>
        
        <Link
          href={`/brief/${data.id}`}
          as={`/brief/${data.id}`}
          scroll={false}
        >
          <a onClick={() => useState.setState({ ScrollBriefe: window.scrollX })} >
            <motion.div
              whileTap={{ scale: constants.animation.interaction.whiletap }}
              key={`brief-motion-${data.id}`}
              className="item_preview"
              variants={constants.animation.post}
              layoutId={`${data.id}`}
            >
              {/* bild */}
              {data.digitalisate.page.map((item, index) => (
                <>
                  <img
                    style={{
                      transform: `rotate(${
                        min + Math.random() * (max - min)
                      }deg)`,
                    }}
                    src={`../../pictures/digitalisate/comp-600px_60p/${item}`}
                    key={index}
                  />
                </>
              ))}

              <div className="item_description">
                <h4>{data.datum}</h4>

                <h2>
                    {/* {sen[0].map((item, index) => (
                      <span className="sender_name">
                      {item.name}
                      </span>
                    ))} */}

                      <span className="sender_name">
                      {/* {familie[data.sender.id].name} */}
                        {familie.filter((item) => {
                            return item.id === data.sender.id;
                          })
                          .map((data) => data.name
                        )}
                      </span>
                  
                  <br></br>

                      <span className="empfänger_name">
                      <img className="small-icon" src="../icons/forward.svg" />
                        {familie.filter((item) => {
                            return item.id === data.empfänger.id;
                          })
                          .map((data) => data.name
                        )}
                      </span>
                      
                </h2>

                {/* Postscriptum */}
                <p><i><span className="name">{data.postscriptum}</span></i>
                      <br></br>
                      <br></br></p>

                {/* themen */}
                
                {data.themen.name.map((item, index) => (
                  <p>
                    
                    {item}</p>
                ))}
                
              </div>
            </motion.div>
          </a>
        </Link>
      </div>
    );
  });
}
