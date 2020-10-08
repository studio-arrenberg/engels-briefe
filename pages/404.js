
import Link from 'next/link'
import Router from 'next/router'


import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
    return (
        <Layout>
            <div className="alice">
                <h1 className={utilStyles.lightText}>You have gone the wronge way</h1>
                <br></br>
                <br></br>
                <br></br>
                <img
                src="/miscellaneous/alice.gif"
                className={utilStyles.picture}
                alt='alice'
                />
                <br></br>
                <br></br>
                <br></br>
                <a  onClick={() => Router.back()}> Zurück</a>

            </div>
        </Layout>
    
    )
    
}