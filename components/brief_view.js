import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import constants from './constants'

export default function Brief({data}) {
    // const url = data.scan.page[0]
    return (
      data.map((data, id) => {
        return (
          <div key={`${data.id}`} >
            <motion.div variants={constants.animation.post} layoutId={`${data.id}`}>
                <div key={`${data.id}`} className={utilStyles.brief_preview}>

                    <img src={`../pictures/digitalisate/${data.digitalisate.page[0]}`}/>
                    <Link href="/brief/[brief]" as={`/brief/${data.id}`}>
                        <a>{data.sender.name} an {data.empfänger.name}</a>
                    </Link>
                    <h4>{data.datum}</h4>
                    <p>{data.text}</p>
    
                </div>
            </motion.div>
          </div>
        )
      })
    )
  }
  