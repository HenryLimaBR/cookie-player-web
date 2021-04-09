import { useEffect } from 'react'
import Head from 'next/head'
import '../styles/global.css'

import player from '../services/player'
import cover from '../services/cover'

export default function App({ Component, pageProps }) {
  function init() {
    player.init()
    cover.init()
  }

  useEffect(() => {
    window.addEventListener('load', init)
  }, [])

	return (
	  <>
  	  <Head>
	      <meta name='charset' content='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no' />
        <link rel="manifest" href="manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Cookie Player" />
        <meta name="apple-mobile-web-app-title" content="Cookie Player" />
        <meta name="theme-color" content="#111111" />
        <meta name="msapplication-navbutton-color" content="#111111" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
        <link rel="icon" type="image/png" sizes="192x192" href="/res/img/icon.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/res/img/icon.png" />
        <title>Cookie Player Web</title>
        <meta name='theme-color' content='#111' />
	    </Head>
	    <Component {...pageProps} />
	  </>
  )
}

