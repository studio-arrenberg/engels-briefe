import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from '../public/data.json'
import {motion, AnimatePresence} from 'framer-motion'
import constants from '../components/constants'
import Brief_view from '../components/brief_view'
import Menu from '../components/main_menu'

export default function Page() {

  return (


      <Layout home>
      
        <Head>
          <title>Briefe</title>
        </Head>

        <motion.div initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit}>
            {/* {newdata} */}
            <Brief_view data={data.briefe}></Brief_view>
        </motion.div>

      </Layout>
      
  )

}


// redundant brief view:

// const newdata = data.briefe.map((data, id) => {

//     return (
//       <div key={data.id} className={utilStyles.post}>
//       <motion.div  variants={constants.animation.post} layoutId={`${data.id}`}>
//         <div key={data.id} className={utilStyles.brief_preview}>
        

//         {/* path should be included of the first page */}
//           <img src={`${data.page_01}`}/>

//           <div className={utilStyles.post_description}>
//             <Link href="/brief/[brief]" as={`/brief/${data.id}`}>
//                  <a className={utilStyles.post_description_title}>{data.sender} an {data.empfänger} {data.sender_ort}</a>  
//             </Link>

//               <h6>{data.datum}</h6>
//               <h6>{data.text}</h6> 
//             </div>
//         </div>
//         </motion.div>
//         </div>
      
//     )
  
// })
