
import Link from 'next/link'
import Router from 'next/router'
import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import { useRouter, Redirect } from "next/router";
import { useState, useEffect, useRef } from "react";


export default function Custom404() {

    useEffect(() => {
        // const {pathname} = Router
        // const router = useRouter();
        // Router.push('/')
        window.location = "http://localhost:3000";
      });

      return (<></>)
      
}