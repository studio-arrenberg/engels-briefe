// import Head from 'next/head'
// import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import constants from './constants'

export default function Brief({data}) {
    // const url = data.scan.page[0]
    return (
      data.map((data, id) => {
        return (
          
          <div className={utilStyles.item} key={`${data.id}`} >
          <Link href="/brief/[brief]" as={`/brief/${data.id}`}>

            <motion.div div key={`${data.id}`} className={utilStyles.brief_preview} variants={constants.animation.post} layoutId={`${data.id}`}>
                    
                    <img src={`../pictures/digitalisate/small/${data.digitalisate.page[0]}`}/>
                    <img src={`../pictures/digitalisate/small/${data.digitalisate.page[1]}`}/>

                    <div className={utilStyles.post_description}>
                      <h4>{data.datum}</h4>
                      <h2><span className="sender_name">{data.sender.name}</span> an <br></br> <span className="empfänger_name"></span>{data.empfänger.name}</h2>
                      <a>Liebe/ Ehe, Thema</a>
                      <a className="arrow-back">   &gt;
        {/* <img src={`../icons/back.svg`}/> */}
                      </a>
                      {/* <p>{data.text}</p> */}
                    </div>
            </motion.div>
            </Link>

          </div>

        )
      })
    )
  }