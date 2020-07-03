import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import constants from './constants'

export default function Brief({data}) {
    return (
      data.map((data, id) => {
        return (
          <div key={`${data.id}`} >
            <motion.div variants={constants.animation.post} layoutId={`${data.id}`}>
                <div key={`${data.id}`} className={utilStyles.brief_preview}>

                    <img src={`${data.page_01}`}/>
                    <Link href="/brief/[brief]" as={`/brief/${data.id}`}>
                        <a>{data.sender} an {data.empfänger}</a>
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
  