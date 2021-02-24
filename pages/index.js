import { useState, useEffect } from 'react';
import Head from 'next/head';
import style from '../styles/index.module.css';

import { init } from  '../services/init';

import SearchBar from '../components/SearchBar';
import List from '../components/List';
import PlayerBar from '../components/PlayerBar';

export default function Home() {
	const [search, setSearch] = useState(null);
	const [wait, setWait] = useState(false);

	useEffect(() => { init(); }, []);

	return (
		<>
			<Head>
				<title>Cookie Web Player</title>
				<meta name='theme-color' content='#000000' />
				<link rel='icon' type='image/png' href='/res/img/icon.png' />
			</Head>

			<div className={style.container}>
				<div className={style.search_containet}>
					<SearchBar setSearch={setSearch} wait={wait} setWait={setWait} />
				</div>

				<div className={style.list_container}>
					<List data={search} wait={wait} setWait={setWait} />
				</div>

				<div className={style.player_container}>
					<PlayerBar />
				</div>
			</div>

			<script src="//cdn.jsdelivr.net/npm/eruda"></script>
			<script>eruda.init();</script>
		</>
	);
}
