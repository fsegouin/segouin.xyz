import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultOGURL = 'https://segouin.xyz'
const defaultOGImage = 'https://segouin.xyz/assets/images/thumb.jpg'
const defaultTitle = 'segouin.xyz'
const defaultDescription = 'Who cares?'
const defaultType = 'website'

const Head = (props) => (
  <NextHead>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta property="og:type" content={props.type || defaultType} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="600" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
