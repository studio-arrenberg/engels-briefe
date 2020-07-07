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
            <motion.div variants={constants.animation.post} layoutId={`${data.id}`}>
              <Link href="/brief/[brief]" as={`/brief/${data.id}`}>
                  <div key={`${data.id}`} className={utilStyles.brief_preview}>
                    
                    <img src={`../pictures/digitalisate/thumbnails/${data.digitalisate.page[0]}`}/>
                    <img src={`../pictures/digitalisate/thumbnails/${data.digitalisate.page[1]}`}/>

                    <div className={utilStyles.post_description}>
                      <h2>{data.sender.name} an {data.empfänger.name}</h2>
                      <h4>{data.datum}</h4>
                      {/* <p>{data.text}</p> */}
                    </div>
                  </div>
              </Link>
            </motion.div>
          </div>

        )
      })
    )
  }