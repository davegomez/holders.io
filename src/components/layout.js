import Head from 'next/head'
import BaseStyles from '../styles/base'
import NavBar from './navbar'
import { colors } from '../styles/theme'

const NowLogo = () => (
  <svg viewBox="0 0 40 35" xmlns="http://www.w3.org/2000/svg">
    <g stroke={colors.primary} fill="none" fillRule="evenodd">
      <path d="M19.844 2.047l17.845 31.95H2z" strokeWidth="2"/>
      <path d="M36.085 33.59L19.235 3.23M36.85 33.59L20 3.23M35.32 33.59L19.233 4.05M34.553 33.59L19.233 4.872M18.468 4.872l16.85 28.718M33.787 33.59L18.467 5.692M30.723 27.026L24.596 16.36" strokeLinecap="square"/>
    </g>
    <style jsx>{`
      svg {
        width: 14px;
      }
    `}</style>
  </svg>
)

const Layout = props => (
  <div style={{ position: 'relative' }}>
    <Head>
      <title>holders.io</title>
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
      <link href="https://necolas.github.io/normalize.css/7.0.0/normalize.css" rel="stylesheet" />
    </Head>

    <NavBar url={ props.url } />

    <div className='container'>
      { props.children }
    </div>

    <footer>
      <p>Powered by <a href="https://zeit.co/now" aria-label="Powered by Now"><NowLogo /> Now</a></p>
    </footer>

    <BaseStyles />
    <style jsx>{`
      .container {
        margin: 0 auto;
        width: 880px
      }

      footer {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        width: 100%;
      }

      p {
        color: ${colors.primary};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        display: inline-block;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Layout
