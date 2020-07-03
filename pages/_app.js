// import '../styles/global.css'
// import {motion, AnimatePresence} from 'framer-motion'

// export default function App({ Component, pageProps }) {
//   return (
//     // <AnimatePresence initial={false}>
//       <Component {...pageProps} />
//     // </AnimatePresence>
//   )
// }


import React from 'react';
import App from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/global.css'
// import { motion, AnimateSharedLayout } from "framer-motion"
// import Layout from '../components/layout';
import { useRouter } from 'next/router'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    // console.log(router.pathname)
    return (
      // <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
       </AnimatePresence>
      // </Layout>
    );
  }
}

export default MyApp;
