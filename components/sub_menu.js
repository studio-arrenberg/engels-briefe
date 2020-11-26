import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Router from "next/router";
import { FiArrowLeft } from "react-icons/fi";


export default function Menu() {
  return (
    <nav>
      <a className="menu_left" onClick={() => Router.back()}>
      <img src="../icons/back.svg"></img>
      </a>

      <div className="menu_right">
        {/* <Link href="/"><a >Home</a></Link> */}
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
    </nav>
  );
}
