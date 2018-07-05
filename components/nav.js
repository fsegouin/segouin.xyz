import Link from 'next/link'
import Pipito from '../components/pipito'

const links = [
  { href: 'https://resume.segouin.xyz', label: 'Want to know more?' },
  { href: 'https://github.com/fsegouin/segouin.xyz', label: 'Github' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a className="home">
            <Pipito />
          </a>
        </Link>
      </li>
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul>

    <style jsx>{`
      nav {
        position: absolute;
        width: 100%;
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav > ul {
        padding: 4px 32px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: inherit;
        font-size: 13px;
        text-decoration: none;
        transition: color .25s ease-in-out;
      }
      a:hover {
        color: #dc9656;
        transition: color .25s ease-in-out;
      }
      a.home {
        font-size: 2.33em;
      }
    `}</style>
  </nav>
)

export default Nav
