import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../public/data.json'
import {motion} from 'framer-motion'
import constants from '../../components/constants'
import Brief_view from '../../components/brief_view'

  
export default function thema() {

    const router = useRouter()
    const { thema } = router.query

    const briefe_list = data.briefe.filter(function(item) {
        return item.themen.id.includes(Number(thema))
    } )

    const item = data.themen.filter(data => {
        return data.id ===  thema;
    })


    return ( 
        <Layout>

          <Head>
            <title>{data.title}</title>
          </Head>

          <motion.div initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit} >
            <Thema_view data={item} />
            <Brief_view data={briefe_list} />
          </motion.div>

        </Layout>
        
    )
}

export function Thema_view({data}) {

    return (
        data.map((data, id) => {
          return (
    
            <motion.div key={`themen${data.id}`} variants={constants.animation.post} layoutId={`${data.id}`}>
                <div className={utilStyles.brief_preview}>
                  <h1>{data.title}</h1>
                  <p>{data.beschreibung}</p>
                  <img src={`../pictures/themen/${data.picture}`}/>
                </div>
            </motion.div>
    
          )}
        )
    )
}
