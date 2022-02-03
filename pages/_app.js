import './bootstrap-5.1.3-dist/css/bootstrap.min.css'
import '../styles/globals.css'  
import React,{useEffect} from 'react'
import Head  from 'next/head'
import  DefaultLayout  from '../Layouts/defaultLayout'
import Footer from '../Layouts/Footer'
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>  
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Spline+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
    </Head>
      <DefaultLayout/>
      <Component {...pageProps} />
      <Footer/>
    </>
   )
}

export default MyApp
