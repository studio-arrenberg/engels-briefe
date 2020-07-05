import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
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

        <section className={utilStyles.headingMd}>
          <motion.div key="familie" initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit} >
              {newdata}        
          </motion.div>
        </section>

    </Layout>
  )
}

const newdata = data.familie.map((data, id) => {
    return (
      <motion.div key={`familir${data.id}`} variants={constants.animation.post} layoutId={`${data.id}`}>
        <div className={utilStyles.brief_preview}>
            <Link href="/person/[person]" as={`/person/${data.id}`}>
                <a>{data.name}</a>
            </Link>
            <img src={`../pictures/personen/${data.picture}`}/>
            <h6>{data.beschreibung}</h6>
        </div>
        </motion.div>
    )
})
