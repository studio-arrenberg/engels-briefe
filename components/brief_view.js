import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import constants from './constants'

export default function Brief({data}) {
    // const url = data.scan.page[0]
    return (
      data.map((data, id) => {
        return (
          <div key={`${data.id}`} className={utilStyles.post} >
            <motion.div variants={constants.animation.post} layoutId={`${data.id}`}>
                <div key={`${data.id}`} className={utilStyles.brief_preview}>

                    <img src={`../pictures/digitalisate/${data.digitalisate.page[0]}`}/>
                      <div className={utilStyles.post_description}>
                      <Link href="/brief/[brief]" as={`/brief/${data.id}`}>
                        <a className={utilStyles.post_description_title}>{data.sender.name} an {data.empfänger.name} {data.sender_ort}</a>
                      </Link>
                      <h4>{data.datum}</h4>
                      <p>{data.text}</p>
                    </div>
    
                </div>
            </motion.div>
          </div>
        )
      })
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
