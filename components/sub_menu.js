import Link from "next/link";
import Router from "next/router";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import constants from "./constants";
import { useRouter } from "next/router";

export default function Menu() {
  return (
    <motion.nav>
      {/* <Link> */}
      <a className="menu_left" onClick={() => Router.back()}>
        <img src="../icons/back.svg"></img>
      </a>
      {/* </Link> */}

      <div className="menu_right">
        {/* <Link href="/"><a >Home</a></Link> */}
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
