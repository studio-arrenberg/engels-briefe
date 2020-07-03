import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'
import Main_Menu from '../components/main_menu'
import Sub_Menu from '../components/sub_menu'
import {motion, AnimatePresence} from 'framer-motion'

import { useRouter } from 'next/router'


export default function Layout({ children, home  }) {
  const router = useRouter()
  // console.log(router.pathname)
  return (
    
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Engelsbriefe"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content="Engelsbriefe" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      {/* <header className={styles.header}>
        {home ? (
          <>
            <Menu/>
          </>
        ) : (
          <>
            <Menu/>
          </>
        )}
      </header> */}
  
      <MenuTest></MenuTest>

      <main>{children}</main>
    </div>
  )
}

export function MenuTest() {
  const router = useRouter()
  console.log(router.pathname)
  if (router.pathname.includes('[')) {
    return (
      <Sub_Menu/>
    )
    
  }
  else {
    return (
      <Main_Menu/>
    )
   
  }

}

