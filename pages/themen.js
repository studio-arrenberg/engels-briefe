import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from '../public/data.json'
import {motion} from 'framer-motion'
import constants from '../components/constants'

export default function Briefe() {
  return (
    <Layout home>
      <Head>
        <title>Themen</title>
      </Head>

          <motion.div initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit} >
              {newdata}
          </motion.div>

    </Layout>
  )
}

const newdata = data.themen.map((data, id) => {
    return (
      <div className={utilStyles.item} key={`${data.id}`} >
        <motion.div key={`themen${data.id}`} variants={constants.animation.post} layoutId={`${data.id}`}>
          <Link href="/thema/[thema]" as={`/thema/${data.id}`}>

          <div key={data.id} className={utilStyles.brief_preview}>
            <img src={`../pictures/themen/${data.picture}`}/>
            <div className={utilStyles.post_description}>

            <h2>{data.title}</h2>
            <p>{data.beschreibung}</p>
            </div>
          </div>
          </Link>

        </motion.div>  
      </div>

    )
})

  