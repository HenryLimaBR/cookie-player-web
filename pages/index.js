import { useState, useEffect } from 'react';
import Head from 'next/head';

import style from '../styles/index.module.css';

export default function Home() {
	function handleinput(e) {
		console.log(e);
	}

	return (
		<>
			<Head>
				<title>Cookie Web Player</title>
				<meta name="theme-color" content="#000000" />
			</Head>

			<div className={style.container}>
				<input type='text' onInput={handleinput} className={style.searchbox} placeholder='Search Here' />
			</div>
		</>
	);
}
