import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import ChangeLog from '../components/change-log'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Engelsbriefe</title>
      </Head>
        <h1>Moin</h1>      
              <ChangeLog/>

    </Layout>
  )
}