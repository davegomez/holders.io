import Link from 'next/link'

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
        color: rgb(255, 255, 255);
        list-style: none;
        margin-right: 20px;
      }

      .active {
        border-bottom: 1px solid rgb(255, 255, 255);
        margin-bottom: -2px;
      }

      a {
        color: rgb(255, 255, 255);
        text-decoration: none;
      }
    `}</style>
  </ul>
)
}

export default Links
