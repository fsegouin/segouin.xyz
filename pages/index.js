import Head from '../components/head'
import Nav from '../components/nav'

export default () => (
  <div className="root">
    <Head title="Home" />
    <Nav />
    <div className="hero">
      <h1 className="title">
        <span className="bracket">{`{`} </span>
        Hi, this is <u><a href="mailto:florent+website@segouin.me">Florent</a>!</u> I'm a <s>full-stack</s> developer, <s>hardware</s> hacker, wizard.
        I like to make your everyday life easier. I break stuff to know how they're made so that I can improve them.
        I think many things we take for granted can be improved. By thinking outside of the box, we can redefine how we use anything.
        We are behind what we know is possible today. What prevents us from really going forward is centuries of habits and legacy, and we have the tools to change that.
        What gets me up in the morning is seeing magic in people's eyes when I show them my work.
        <span className="bracket"> {`}`}</span>
      </h1>
    </div>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500,600');
      :global(body) {
        background-color: #1B2B34;
        margin: 0;
        color: #d8d8d8;
        font-size: 13px;
        font-family: 'Work Sans',-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;

        @media screen and (min-width: 667px) {
          font-size: 18px;
        }
      }
      .root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        height: 100%;
      }
      .hero {
        color: #a1b56c;
        flex-grow: 1;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 18%;
        font-size: 1.22vh;

        @media screen and (min-width: 1024px) {
          font-size: 1em;
        }
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.33em;
        font-weight: 500;

        a {
          color: inherit;
        }

        .bracket {
          color: #d8d8d8;
        }

        &::selection,
        a::selection,
        u::selection,
        s::selection,
        .bracket::selection {
          background-color: #f7ca88;
        }
      }
      .title, .description {
        text-align: center;
      }
    `}</style>
  </div>
)
