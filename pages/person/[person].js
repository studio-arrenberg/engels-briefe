import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../public/data.json'
import {motion} from 'framer-motion'

import animation_init from '../../components/constants'
const postVariants = animation_init


export default function brief() {

    const router = useRouter()
    const { person } = router.query

    const briefe_list = data.briefe.filter(function(item) {
        return item.sender_id.includes(Number(person))
    } )

    const item = data.familie.filter(data => {
        return data.id ===  person;
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

        <Person_view data={item} />

        <Brief_view data={briefe_list} />

        </motion.div>

        </Layout>
        
    )
}

export function Brief_view({data}) {
    return (
    data.map((data, id) => {
        // console.log(data.id)
        return (
            <div key={`${data.id}`} >
            <motion.div variants={postVariants} layoutId={`${data.id}`}>
            <div key={`${data.id}`} className={utilStyles.brief_preview}>
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

export function Person_view({data}) {

    return (
        data.map((data, id) => {
            // console.log(data.name)
          return (
            <div key={`${data.name}`}>
            <motion.div variants={postVariants} layoutId={`${data.id}`}>
            <div key={`${data.name}`} className={utilStyles.brief_preview}>
            <h1>{data.name}</h1>
            <p>{data.beschreibung}</p>
    
            </div>
            </motion.div>
            </div>
    
          )}
          
          )
          
          )

}
