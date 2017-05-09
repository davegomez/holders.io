import Link from 'next/link'
import { colors } from '../styles/theme'

const routes = {
  '/': 'Home',
  '/docs': 'Documentation',
  '/about': 'About'
}

const Links = props => (
  <ul>
    {Object.keys(routes).map(route => route === props.url.pathname ?
      (<li key={route}>{routes[route]}</li>) :
      (<li key={route} className='active'>
        <Link href={`${route}`}><a>{routes[route]}</a></Link>
      </li>)
    )}

    <style jsx>{`
      ul {
        display: flex;
      }

      li {
        color: ${colors.primary};
        list-style: none;
        margin-right: 20px;
      }

      .active {
        border-bottom: 1px solid ${colors.primary};
        margin-bottom: -2px;
      }

      a {
        color: ${colors.primary};
        text-decoration: none;
      }
    `}</style>
  </ul>
)

export default Links
