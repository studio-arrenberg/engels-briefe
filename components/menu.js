/* 

deprecated !


*/

// import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Router from 'next/router'


export default function Menu() {

    return (
        <nav>

                <a class="menu_left" onClick={() => Router.back()}></a>

                <div class="menu_right">
                    {/* <Link href="/"><a >Home</a></Link> */}
                    <Link href="/briefe"><a>Briefe</a></Link>
                    <Link href="/themen"><a>Themen</a></Link>
                    <Link href="/familie"><a>Familie</a></Link>
                </div>

            </nav>
    )

    
}




