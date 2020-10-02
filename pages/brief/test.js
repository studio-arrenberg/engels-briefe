import Layout from '../../components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../public/data.json'
import {motion} from 'framer-motion'
import constants from '../../components/constants'
// import { Timeline2 } from '../briefe'
import React, { Children, Component } from 'react'
import { id } from 'date-fns/locale'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Brief_wrapper from '../../components/brief_wrapper'

export default function page() {

  const item = data.briefe.filter(data => {
    return data.id === '1';
  })

  return (

        <Brief_wrapper data={item}>

          {/* brief text goes here */}
          <h1>World</h1>
          <p><i>Moin</i></p>
        
        </Brief_wrapper>

  )
}

