import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Router from 'next/router'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'
// import backicon from './icons/back.svg'
import { FiArrowLeft } from "react-icons/fi";


export default function Menu() {

    return (
        <header className={styles.header}>
            <nav >

                <a className={utilStyles.menu_left} onClick={() => Router.back()}><FiArrowLeft/></a>

                <div className={utilStyles.menu_right}>
                    {/* <Link href="/"><a >Home</a></Link> */}
                    <Link href="/briefe"><a >Briefe</a></Link>
                    <Link href="/themen"><a  >Themen</a></Link>
                    <Link href="/familie"><a >Familie</a></Link>
                </div>

            </nav>
        </header>
    )
}