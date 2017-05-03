import Links from './links'

const NavBar = (props) => (
  <div className='navbar'>
    <Links url={ props.url } />
    <style jsx>{`
      div {
        align-items: middle;
        background-color: rgb(3, 102, 214);
        display: flex;
        height: 50px;
        margin: 0 auto 50px;
        width: 100%;
      }
    `}</style>
  </div>
)

export default NavBar
