import Link from 'next/link'

import Head from './head'

export default ({ children, title = 'segouin.xyz' }) => (
  <div className="layout">
    <Head title={title} description="Who cares?" />
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <a href="https://resume.segouin.xyz">Some kind of a resume?</a>
        <a href="mailto:florent+work@segouin.me">Contact</a>
      </nav>
    </header>

    <main>{children}</main>

    <footer>
      <div className="footer">© Florent Segouin, 2020</div>
    </footer>
    <style jsx>{
      /* CSS */ `
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        header {
          width: 100%;
          height: 3rem;
          border-bottom: 1px solid #ddd;
        }
        nav {
          display: flex;
          height: 100%;
          width: 100%;
          max-width: 1024px;
          margin: auto;
          align-items: center;
          padding-left: 2rem;
          padding-right: 2rem;
          box-sizing: border-box;
        }
        nav a {
          font-size: 0.75rem;
          padding: 0.65rem 0.5rem 0.5rem;
          text-transform: uppercase;
          text-decoration: none;
          color: #2d1f03;
        }
        main {
          flex: 1 1 auto;
          padding-left: 2rem;
          padding-right: 2rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          width: 100%;
          max-width: 1024px;
          box-sizing: border-box;
          margin: auto;
        }
        footer {
          width: 100%;
          background-color: #e1ddd3;
        }
        .footer {
          font-size: 0.75rem;
          padding-left: 2rem;
          padding-right: 2rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          width: 100%;
          max-width: 1024px;
          box-sizing: border-box;
          margin: auto;
        }
        @media screen and (min-width: 40em) {
          nav {
            padding-left: 4rem;
            padding-right: 4rem;
          }
          main {
            padding-left: 4rem;
            padding-right: 4rem;
          }
          .footer {
            padding-left: 4rem;
            padding-right: 4rem;
          }
        }
      `
    }</style>
    <style jsx global>{
      /* CSS */ `
        html,
        body {
          font-family: 'Fira Code', Monaco, 'DejaVu Sans Mono', 'Lucida Console',
            monospace;
          font-size: 1rem;
          background-color: #fbfaf9;
          color: #2d1f03;
          margin: 0;
          line-height: 1.75;
        }
      `
    }</style>
  </div>
)
