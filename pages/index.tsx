import React from 'react'
import Head from 'next/head'

import style from '../styles/index.module.css'

import init from '../services/init'

class Home extends React.Component<FE.RC.HomeProps, FE.RC.HomeState> {
	constructor(props: FE.RC.HomeProps) {
		super(props)
	}

	componentDidMount() {
		console.log(
			'%c|Cookie Player Web - Hello World|',
			'background-color: #282a36; color: #bd93f9; font-size: 14px;'
		)
		window.addEventListener('load', init)
	}

	render() {
		return (
			<>
				<Head>
					<title>Cookie Player</title>
				</Head>

				<div className={style.container}>
					<div></div>
					<div></div>
				</div>
			</>
		)
	}
}

export default Home