import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from '../public/data.json'
import { motion } from 'framer-motion'

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    opacity: 0,
  }
};

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
