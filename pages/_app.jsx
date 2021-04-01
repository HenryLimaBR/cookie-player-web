import '../styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
	  <>
  	  <Head>
	      <meta name='charset' content='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <title>Cookie Player Web</title>
        <link rel='manifest' href='/manifest.json' />
        <link
          href='/res/img/icon.png'
          rel='icon'
          type='image/png'
        />
        <meta name='theme-color' content='#111' />
	    </Head>
	    <Component {...pageProps} />
	  </>
  )
}
