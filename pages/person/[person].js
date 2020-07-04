import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../public/data.json'
import {motion} from 'framer-motion'
import constants from '../../components/constants'
import Brief_view from '../../components/brief_view'


export default function person() {

    const router = useRouter()
    const { person } = router.query

    const briefe_list = data.briefe.filter(function(item) {
        return item.id.includes(Number(person))
    } )

    const item = data.familie.filter(data => {
        return data.id ===  person;
      })


    return ( 
        <Layout>

            <Head>
              <title>{data.title}</title>
            </Head>

          <motion.div initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit}>   

            <Person_view data={item} />
            <Brief_view data={briefe_list}></Brief_view>

          </motion.div>

        </Layout>
        
    )
}

export function Person_view({data}) {

    return (
        data.map((data, id) => {
          return (
            <div key={`${data.name}`}>
              <motion.div variants={constants.animation.post} layoutId={`${data.id}`}>
                <div key={`${data.name}`} className={utilStyles.brief_preview}>
                  <h1>{data.name}</h1>
                  <p>{data.beschreibung}</p>
                  <img src={`../../pictures/personen/${data.picture}`}/>
                </div>
              </motion.div>
            </div>
    
          )}
          
        )
    )
}
