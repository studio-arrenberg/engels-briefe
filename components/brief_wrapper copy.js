import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import constants from './constants'
import Layout from './layout'
import Head from 'next/head'

const Brief_wrapper = (props) => {

    console.log(props.data);

    

    return (
      <Layout>
      <Head>
        <title>Brief</title>
      </Head>
  
      <motion.div className="brief_view" initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit} > 
  
  
      {/* header */}
      <h1>Hello</h1>
      {/* content */}
      <div>{props.children}</div>
      {/* footer */}
      <h1>!</h1>
  
  
      </motion.div>
  
      </Layout>
    )
}

export default Brief_wrapper;