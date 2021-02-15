import { useState, useEffect } from 'react';
import Head from 'next/head';
import style from '../styles/index.module.css';

import SearchBar from '../components/SearchBar';
import List from '../components/List';

export default function Home() {
	const [search, setSearch] = useState(null);
	const [wait, setWait] = useState(false);

	return (
		<>
			<Head>
				<title>Cookie Web Player</title>
				<meta name="theme-color" content="#000000" />
			</Head>

			<div className={style.container}>
				<SearchBar setSearch={setSearch} wait={wait} setWait={setWait} />

				<div className={style.list_container}>
					<List data={search} wait={wait} setWait={setWait} />
				</div>

				<div className={style.player_box}></div>
			</div>

			<script src="//cdn.jsdelivr.net/npm/eruda"></script>
			<script>eruda.init();</script>
		</>
	);
}
