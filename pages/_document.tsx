import Document, { Html, Head, Main, NextScript } from 'next/document'

const defaultTitle = `Jesse Sibley's Blog`
const defaultDescription =
  'Thoughts on React, Typescript, Node. Building products for humans.'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content={defaultTitle} />
          <meta name="twitter:site" content="@jessethesibley" />
          <meta name="twitter:creator" content="@jessethesibley" />
          <meta name="twitter:title" content={defaultTitle} />
          <meta name="twitter:description" content={defaultDescription} />
          <meta name="og:url" content="https://jessesibley.com" />
          <meta name="og:type" content="article" />
          <meta name="og:title" content={defaultTitle} />
          <meta name="og:description" content={defaultDescription} />
        </Head>
        <body>
          <div>
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
