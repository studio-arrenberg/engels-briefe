import Link from "next/link";
import Router from "next/router";
import { FiHome } from "react-icons/fi";
import { motion } from "framer-motion";
import constants from "./constants";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

export default function Menu() {
  const router = useRouter();
  console.log(router.pathname);

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
          <a className={ router.pathname === "/briefe" ? 'activ' : null }>Briefe</a>
        </Link>
        <Link href="/themen" scroll={false}>
          <a className={ router.pathname === "/themen" ? 'activ' : null } >Themen</a>
        </Link>
        <Link href="/familie" scroll={false}>
          <a className={ router.pathname === "/familie" ? 'activ' : null } >Familie</a>
        </Link>
      </div>
    </motion.nav>
  );
}
