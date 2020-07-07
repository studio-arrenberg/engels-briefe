// import Head from 'next/head'
// import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

const postVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      opacity: 0,
    }
  };

export default function ChangeLog() {
    return (
    <>

<motion.div
        key="changelog"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } }, enter: { transition: { staggerChildren: 0.1 } } }}
        >

<motion.div key='we' variants={postVariants} layoutId='we'>
        <div className={utilStyles.innerSection}>
            <h1 className={utilStyles.headingXl} >Engels Briefe</h1>
            <div className={utilStyles.lightText}>
            <p>Simplified Change Log</p>
            </div>
            

            <ul>
                {/* ### list ###  */}
            <li>
                more & actual data
            </li>
            <li>
                undefined is not an object (evaluating 'children.join')
            </li>
            <li >
                Brief View file
            </li>
            <li className={utilStyles.strike}>
                Framer Motion
            </li>
            <li>
                Images
            </li>
            <li className={utilStyles.strike}>
                <Link href='/api/hello'><a>API</a></Link>
            </li>
            <li>
                Clean Syntax (global functions)
            </li>
            <li className={utilStyles.strike}>
                Pages (Familie, Themen, Briefe)
            </li>
            <li className={utilStyles.strike}>
                Import JSON
            </li>
            <li className={utilStyles.strike}>
                Header
            </li>
            <li className={utilStyles.strike}>
                Layout
            </li>
            



        </ul>
        </div>
        </motion.div>
</motion.div>
    </>
    )
}