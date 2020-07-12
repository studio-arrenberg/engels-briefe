import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from '../public/data.json'
import { motion } from 'framer-motion'
import constants from '../components/constants'

export default function Briefe() {
  return (
    <Layout home>
      <Head>
        <title>Familie</title>
      </Head>

        <motion.div key="familie" initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit} >
          <Familie data={data} />     
        </motion.div>

    </Layout>
  )
}

export function Familie({data}) {
  return (
    data.familie.map((data) => {
      return (
        <div className={utilStyles.item} key={`${data.id}`} >

          <motion.div key={`familie${data.id}`} variants={constants.animation.post} layoutId={`${data.id}`}>
            <Link href="/person/[person]" as={`/person/${data.id}`}>
              <div className={utilStyles.brief_preview}>
                <img src={`../pictures/personen/thumbnails/${data.picture}`}/>
                <div className={utilStyles.post_description}>
                  <h2>{data.name}</h2>
                  <p>{data.beschreibung}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      )
    })
  )
}