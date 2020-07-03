import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../public/data.json'
import {motion} from 'framer-motion'
import constants from '../../components/constants'
import Briefe from '../familie'
import Brief_view from '../../components/brief_view'


export default function Page() {

  const router = useRouter()
  const { brief } = router.query

  const item = data.briefe.filter(data => {
    return data.id === brief;
  })

  return ( 
    <Layout>
      <Head>
        <title>Brief</title>
      </Head>

      <motion.div initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit} > 
          {/* should be replaced with the proper brief */}
          <Brief_view data={item}></Brief_view>
      </motion.div>

    </Layout>
  )
}