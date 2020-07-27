import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="twitter:site" content="@jessethesibley" />
          <meta name="twitter:creator" content="@jessethesibley" />
          <meta name="twitter:title" content="Jesse Sibley's Blog" />
          <meta name="twitter:description" content="Jesse Sibley's Blog" />
          <meta name="og:url" content="https://jessesibley.com" />
          <meta name="og:type" content="article" />
          <meta name="og:title" content="Jesse Sibley's Blog" />
          <meta name="og:description" content="Jesse Sibley's Blog" />
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
