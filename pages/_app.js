import '@/styles/globals.css'

import Layout from '@/components/Layout'
import Script from 'next/script'

function MyApp({Component, pageProps}) {

  return (
    <Layout>

      <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-2WTTD0XMFH'/>

        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2WTTD0XMFH', {
              page_path: window.location.pathname
            })
          `}
        </Script>

      <Component {...pageProps}/>
    </Layout>
  )
  
}

export default MyApp