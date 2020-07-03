import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from '../public/data.json'
import { motion } from 'framer-motion'

import animation_init from '../components/constants'
const postVariants = animation_init


export default function Briefe() {
  return (
    <Layout home>
      <Head>
        <title>Briefe</title>
      </Head>
      
        {/* <h1>Hello World</h1> */}

        <section className={utilStyles.headingMd}>
        <motion.div
        key="familie"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } }, enter: { transition: { staggerChildren: 0.1 } } }}
        >

                {newdata}        

        </motion.div>
        </section>


    </Layout>
  )
}

const newdata = data.familie.map((data, id) => {
    return (
      <motion.div key={`familir${data.id}`} variants={postVariants} layoutId={`${data.id}`}>
        <div className={utilStyles.brief_preview}>
            <Link href="/person/[person]" as={`/person/${data.id}`}>
                <a>{data.name}</a>
            </Link>
            <h6>{data.beschreibung}</h6>
            
        </div>
        </motion.div>
    )
})
