import Document, { Html, Head, Main, NextScript } from 'next/document'
import Nav from '../components/nav'
import Footer from '../components/footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital@0;1&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased">
          <Nav />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    )
  }
}

export default MyDocument
