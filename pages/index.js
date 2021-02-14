import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { getSearch } from '../services/api';

import style from '../styles/index.module.css';

import List from '../components/List';

export default function Home() {
	const [search, setSearch] = useState(null);
	const [wait, setWait] = useState(false);

	async	function handleUserSearch(e) {
		if (e.key === 'Enter') {
			setWait(true);
			const data = await getSearch(e.target.value);
			setSearch(data);
			setWait(false);
		}
	}

	return (
		<>
			<Head>
				<title>Cookie Web Player</title>
				<meta name="theme-color" content="#000000" />
			</Head>

			<div className={style.container}>

				<div className={style.search_box}>
					<input id='sbx' className={style.search} type='text' onKeyPress={handleUserSearch} placeholder='Search' />
				</div>

				<div className={style.list_container}>
					<Center data={search} wait={wait} setWait={setWait} />
				</div>

				<div className={style.player_box}></div>
			</div>

			<script src="//cdn.jsdelivr.net/npm/eruda"></script>
			<script>eruda.init();</script>
		</>
	);
}

function Center(props) {
	if (props.wait) {
		return (
			<>
				<List {...props} />
				<div style={{ position: 'absolute' }}>
					<Loader type='Bars' color='#0ff' width={72} height={72} />
				</div>
			</>
		);
  } else return <List {...props} />;
}
