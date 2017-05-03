import Head from 'next/head'
import BaseStyles from '../styles/base'
import NavBar from './navbar'
import Ribbon from './ribbon'

const Layout = (props) => (
  <div style={{ position: 'relative' }}>
    <Head>
      <title>holders.io</title>
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
      <link href="https://necolas.github.io/normalize.css/7.0.0/normalize.css" rel="stylesheet" />
    </Head>

    <Ribbon />
    <NavBar url={ props.url } />

    <div className='container'>
      { props.children }
    </div>

    <BaseStyles />

    <style jsx>{`
      .container {
        margin: 0 auto;
        width: 880px
      }
    `}</style>
  </div>
)

export default Layout
