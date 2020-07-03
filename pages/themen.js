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
      
        <section className={utilStyles.headingMd}>
          <motion.div initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit} >
              {newdata}
          </motion.div>
        </section>

    </Layout>
  )
}

const newdata = data.themen.map((data, id) => {
    return (
      <motion.div key={`themen${data.id}`} variants={constants.animation.post} layoutId={`${data.id}`}>
        <div key={data.id} className={utilStyles.brief_preview}>
            <Link href="/thema/[thema]" as={`/thema/${data.id}`}>
                <a>{data.title}</a>
            </Link>
            <h6>{data.beschreibung}</h6>
            
        </div>
        </motion.div>        
    )
})
