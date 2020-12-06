import Link from "next/link";
import Router from "next/router";
import { FiHome } from "react-icons/fi";
import { motion } from "framer-motion";
import constants from "./constants";

export default function Menu() {
  return (
    <motion.nav>
      <Link href="/" scroll={false}>
        <a className="menu_left">
          {/* <img src="../icons/back.svg"></img> */}
          <img style={{width: "62px"}} src="../icons/home.svg" ></img>
        </a>
      </Link>

      <div className="menu_right">
        <Link href="/briefe" scroll={false}>
          <a>Briefe</a>
        </Link>
        <Link href="/themen" scroll={false}>
          <a>Themen</a>
        </Link>
        <Link href="/familie" scroll={false}>
          <a>Familie</a>
        </Link>
      </div>
    </motion.nav>
  );
}
