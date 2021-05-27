import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/global.scss'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name='charset' content='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no' />
				<link rel="icon" type="image/png" sizes="192x192" href="/res/img/icon.png" />
				<title>Cookie Player Web</title>
				<meta name='theme-color' content='#44475a' />
				<link rel='preload' href='/res/fonts/anicons/AniconsGX.ttf' as='font' crossOrigin='' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App