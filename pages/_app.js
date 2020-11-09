import React from "react";
import App from "next/app";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import { AnimatePresence } from "framer-motion"

import "../styles/global.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        {/* <AnimateSharedLayout></AnimateSharedLayout> */}
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;

// import "../styles/global.css";
// import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import React from "react";
// import App from "next/app";

// function MyApp({ Component, pageProps }) {
//   return (
//     <AnimateSharedLayout>
//       <Component {...pageProps} />
//     </AnimateSharedLayout>
//   );
// }

// export default MyApp;
