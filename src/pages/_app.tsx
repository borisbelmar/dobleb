/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from '@/frontend/components/context'
import WithNavigation from '@/frontend/components/layouts/WithNavigation/WithNavigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>dobleB. by Boris Belmar</title>
        <meta name="description" content="Mi portafolio y blog personal sobre javascript y desarrollo de software en general, donde comparto mis proyectos y conocimientos con el resto." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Boris Belmar" />
        <meta name="copyright" content="dobleB." />
        <meta property="og:title" content="dobleB. by Boris Belmar" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dobleb.cl/" />
        <meta property="og:image" content="https://res.cloudinary.com/dobleb/image/upload/v1678374126/doblebcl/og.jpg" />
        <meta property="og:description" content="Mi portafolio y blog personal sobre javascript y desarrollo de software en general, donde comparto mis proyectos y conocimientos con el resto." />
        <meta property="og:site_name" content="dobleB. by Boris Belmar" />
      </Head>
      <ThemeProvider>
        <main className="text-dark-primary-700 dark:text-primary-50">
          <WithNavigation>
            <Component {...pageProps} />
          </WithNavigation>
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
