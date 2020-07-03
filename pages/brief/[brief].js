import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../public/data.json'
import {motion} from 'framer-motion'

import animation_init from '../../components/constants'
const postVariants = animation_init

export default function Page() {
  return ( 
  <Layout>
  <Head>
    <title>Hello World</title>
  </Head>

  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{ exit: { transition: { staggerChildren: 0.9 } }, enter: { transition: { staggerChildren: 0.1 } } }}
  >   

      <Post key="brief"/>

  </motion.div>

  </Layout>
  )
}

const Post = () => {
  const router = useRouter()
  const { brief } = router.query

  const item = data.briefe.filter(data => {
    return data.id ===  brief;
  })

  return (
    item.map((data, id) => {
      return (
        <div key={`${data.id}`} >
        <motion.div variants={postVariants} layoutId={`${data.id}`}>
          <div key={`${data.id}`} className={utilStyles.brief_preview}>
          <img src={`${data.page_01}`}/>
              <h1>{data.sender} an {data.empfänger}</h1>
              <h4>{data.datum}</h4>
              <p>{data.text}</p>

          </div>
        </motion.div>
        </div>
      )
    })
  )
}



