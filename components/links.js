import Link from 'next/link'
import { colors } from '../styles/theme'

const routes = {
  '/': 'Home',
  '/docs': 'Documentation',
  '/about': 'About'
}

const Links = (props) => {
  console.log(props.url.pathname)
  return (
  <ul>
    { Object.keys(routes).map(route => route === props.url.pathname ?
      (<li key={ route }>{ routes[route] }</li>) :
      (<li key={ route } className='active'>
        <Link href={`${route}`}><a>{ routes[route] }</a></Link>
      </li>)
    ) }

    <style jsx>{`
      ul {
        display: flex;
      }

      li {
        color: ${colors.white};
        list-style: none;
        margin-right: 20px;
      }

      .active {
        border-bottom: 1px solid ${colors.white};
        margin-bottom: -2px;
      }

      a {
        color: ${colors.white};
        text-decoration: none;
      }
    `}</style>
  </ul>
)
}

export default Links
