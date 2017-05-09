import Link from 'next/link'
import { colors } from '../styles/theme'

const Ribbon = () => (
  <div>
    <svg width="187" height="187" xmlns="http://www.w3.org/2000/svg">
      <path d="M57.22-.064l129.91 129.91-.037 56.53L.668-.047" fill={colors.primary} fillRule="evenodd" />
    </svg>
    <Link href='https://github.com/davegomez/holders.io'>
      <a aria-label="View source on Github">Fork me on GitHub</a>
    </Link>

    <style jsx>{`
    div {
      position: absolute;
      right: 0;
      top: 0;
    }

    a {
      color: ${colors.secondary};
      padding: 10px 6px 10px 22px;
      position: absolute;
      right: -14px;
      text-decoration: none;
      top: 56px;
      transform: rotate(45deg);
    }
  `}</style>
  </div>
)

export default Ribbon
