import utilStyles from "../styles/utils.module.css";
// import Link from "next/link";
import { motion } from "framer-motion";
import constants from "../components/constants";
// import styles from './layout.module.css'
import Link from "next/link";

export default function ChangeLog() {
  return (
    <>
      <motion.div
        key="changelog"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={constants.animation.section_exit}
      >
        <motion.div key="we" variants={constants.animation.post} layoutId="we">
          <div className="change-log">
            <h1 className={utilStyles.headingXl}>Engels Briefe</h1>
            <div className={utilStyles.lightText}>
              {/* <p>Urgend things:</p> */}
            </div>
            <br></br>
                <Link href="/swipetest">
                  <a>Brief Swipe</a>
                </Link>

          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
