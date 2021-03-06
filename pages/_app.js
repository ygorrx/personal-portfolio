import '../styles/globals.css'
import React from 'react'
import Layout from './components/Layout'
import Loading from './components/Loading'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <AnimatePresence
            onExitComplete={() => window.scrollTo(0, 0)}
            key={router.asPath}
            animate={{
              x: 0,
              opacity: 1
            }}
            initial={{
              x: 100,
              opacity: 0
            }}
            exit={{
              opacity: 0,
              ease: 'easeOut'
            }}
            transition={{
              duration: 0.5,
              ease: 'easeIn'
            }}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Layout>
      )}
    </>
  )
}

export default MyApp
