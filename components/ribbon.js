import Link from 'next/link'

const Ribbon = () => (
  <div>
    <svg width="187" height="187" xmlns="http://www.w3.org/2000/svg">
      <path d="M57.22-.064l129.91 129.91-.037 56.53L.668-.047" fill="#000" fillRule="evenodd"/>
    </svg>
    <Link href='https://github.com/davegomez/holders.io'>
      <a className="github-link" aria-label="View source on Github">Fork me on GitHub</a>
    </Link>

    <style jsx>{`
    div {
      position: absolute;
      right: 0;
      top: 0;
    }

    a {
      position: absolute;
      color: rgb(255, 255, 255);
      text-decoration: none;
      transform: rotate(45deg);
      padding: 10px 6px 10px 22px;
      top: 56px;
      right: -14px;
    }
  `}</style>
  </div>
)

export default Ribbon
