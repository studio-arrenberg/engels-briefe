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


        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.9 } }, enter: { transition: { staggerChildren: 0.1 } } }}
        >

        <Thema_view data={item} />

        <Brief_view data={briefe_list} />

        </motion.div>

        </Layout>
        
    )
}

export function Brief_view({data}) {

    return (
    data.map((data, id) => {
        return (
            <div key={data.id} className="post">
            <motion.div variants={postVariants} layoutId={`${data.id}`}>
            <div  key={data.id} className={utilStyles.brief_preview}>
                <Link href="/brief/[brief]" as={`/brief/${data.id}`}>
                    <a>{data.sender} an {data.empfänger}</a>
                </Link>
                <h6>{data.datum}</h6>
                <h6>{data.text}</h6>
                
            </div>
            </motion.div>
            </div>
        )
    })
    )
}

export function Thema_view({data}) {

    return (
        data.map((data, id) => {
          return (
    
            <motion.div key={`themen${data.id}`} variants={postVariants} layoutId={`${data.id}`}>
                <div className={utilStyles.brief_preview}>
                <h1>{data.title}</h1>
                <p>{data.beschreibung}</p>
        
                </div>
            </motion.div>
    
          )}
          
          )
          
          )

}
