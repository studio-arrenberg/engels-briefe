import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from '../public/data.json'
import {motion, AnimatePresence} from 'framer-motion'

// import * as Constants from '../components/constants'


import animation_init from '../components/constants'
const postVariants = animation_init


// const postVariants = {
//   initial: { scale: 0.96, y: 30, opacity: 0 },
//   enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
//   exit: {
//     opacity: 0,
//   }
// };

export default function Page() {

  return (
    <Layout home>
      <Head>
        <title>Briefe</title>
      </Head>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          // variants={{ exit: { transition: { staggerChildren: 0.1 } }, enter: { transition: { staggerChildren: 0.1 } } }}
        >
                {newdata}
                
        </motion.div>
    </Layout>
  )
}

const newdata = data.briefe.map((data, id) => {

    return (
      <div key={data.id} className={utilStyles.post}>
      <motion.div  variants={postVariants} layoutId={`${data.id}`}>
        <div key={data.id} className={utilStyles.brief_preview}>
        
          <img src={`${data.page_01}`}/>
          <img src={`${data.page_02}`}/>

          <div className={utilStyles.post_description}>
            <Link href="/brief/[brief]" as={`/brief/${data.id}`}>
    <a className={utilStyles.post_description_title}>{data.sender} an {data.empfänger} {data.sender_ort}</a>
                  
            </Link>

              <h6>{data.datum}</h6>
              {/* <h6>{data.text}</h6> */}
            </div>
        </div>
        </motion.div>
        </div>
      
    )
  
})
