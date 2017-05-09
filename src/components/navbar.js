import Links from './links'
import { colors } from '../styles/theme'

const NavBar = props => (
  <div className='navbar'>
    <Links url={props.url} />
    <style jsx>{`
      div {
        align-items: middle;
        background-color: ${colors.secondary};
        border-bottom: 1px solid ${colors.pholderBg};
        display: flex;
        height: 50px;
        margin: 0 auto 50px;
        width: 100%;
      }
    `}</style>
  </div>
)

export default NavBar
