import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

// import Link from 'next/link'
import Main_Menu from '../components/main_menu'
import Sub_Menu from '../components/sub_menu'
// import {AnimatePresence} from 'framer-motion'
import { useRouter } from 'next/router'


export default function Layout({ children, home  }) {

  return (
    
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Engelsbriefe" />
        <meta name="og:title" content="Engelsbriefe" />
      </Head>

      <MenuTest/>

      {children}
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

