import '../styles/globals.css'
import React from 'react'
import Layout from './components/Layout'
import Loading from './components/Loading'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, []); 

  return (
    <>
     {loading ? (
       <Loading/>
        
      ) : (
        <Layout>
        <Component {...pageProps} />
      </Layout>
      )}
  </>
    )
 }


export default MyApp
