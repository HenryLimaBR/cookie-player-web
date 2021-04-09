import Head from 'next/head'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
	return (
	  <>
  	  <Head>
	      <meta name='charset' content='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no' />
        <link rel="icon" type="image/png" sizes="192x192" href="/res/img/icon.png" />
        <title>Cookie Player Web</title>
        <meta name='theme-color' content='#111111' />
	    </Head>
	    <Component {...pageProps} />
	  </>
  )
}

