import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Router from 'next/router'

export default function Menu() {

    return (
        <section className={styles.menu}>

            <a className={styles.menu_left} onClick={() => Router.back()}>Go Back</a>

                <Link href="/"><a className={styles.menu_right} >Home</a></Link>
                <Link href="/briefe"><a className={styles.menu_right} >Briefe</a></Link>
                <Link href="/themen"><a className={styles.menu_right} >Themen</a></Link>
                <Link href="/familie"><a className={styles.menu_right} >Familie</a></Link>

        </section>
    )


}