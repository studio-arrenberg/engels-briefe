import Head from 'next/head'
import Layout from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
import data from '../public/data.json'
import {motion} from 'framer-motion'
import constants from '../components/constants'
import Brief_view from '../components/brief_view'

export default function Page() {

  return (

      <Layout home>
      
        <Head>
          <title>Briefe</title>
        </Head>

        <motion.div initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit}>
            <Brief_view data={data.briefe}></Brief_view>
        </motion.div>

      </Layout>
      
  )

}
