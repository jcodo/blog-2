import '../css/index.css'
import { AppProps } from 'next/app'
import Footer from '../components/footer'

import * as Fathom from 'fathom-client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview()
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    if (process.env.NODE_ENV === 'production') {
      Fathom.load('GLCOKXMM', {
        includedDomains: ['https://jessesibley.com'],
      })

      router.events.on('routeChangeComplete', onRouteChangeComplete)

      return () => {
        router.events.off('routeChangeComplete', onRouteChangeComplete)
      }
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
