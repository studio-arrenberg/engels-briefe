import Link from "next/link";
import Router from "next/router";
import { FiHome } from "react-icons/fi";
import { motion } from "framer-motion";
import constants from "./constants";

export default function Menu() {
  return (
    <motion.nav
    variants={constants.animation.menu}
    key="mainmenu"
    layoutId="mainmenu"
    className="menu_right"
    initial="initial"
    animate="enter"
    exit="exit"
    >
      <Link href="/">
        <a className="menu_left">
          <img src="../icons/back.svg"></img>
          {/* <FiHome/> */}
        </a>
      </Link>

      <div className="menu_right">
        <Link href="/briefe">
          <a>Briefe</a>
        </Link>
        <Link href="/themen">
          <a>Themen</a>
        </Link>
        <Link href="/familie">
          <a>Familie</a>
        </Link>
      </div>

    </motion.nav>
  );
}
