// import Head from 'next/head'
// import styles from './layout.module.css'
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    opacity: 0,
  },
};

export default function ChangeLog() {
  return (
    <>
      <motion.div
        key="changelog"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          exit: { transition: { staggerChildren: 0.1 } },
          enter: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div key="we" variants={postVariants} layoutId="we">
          <div className="change-log">
            <h1 className={utilStyles.headingXl}>Engels Briefe</h1>
            <div className={utilStyles.lightText}>
              <p>Urgend things:</p>
            </div>

            <ul>
              {/* ### list ###  */}
              <li className={utilStyles.strike}>Visuialiseren</li>
              <li className={utilStyles.strike}>Alle Dateien bekommen</li>
              <li className={utilStyles.strike}>Animationen festlegen</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
