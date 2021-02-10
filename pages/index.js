import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import squary from '../services/squary'

import style from '../styles/index.module.css';

import Item from '../components/Item';

async function search(q) {
	return (await axios.get(`/api/search?q=${q}`)).data;
}
async function audio(id) {
	return (await axios.get(`/api/audio?id=${id}`)).data;
}

export default function Home() {
	const [searchItems, setSearchItems] = useState(null);
	const [player, setPlayer] = useState(null);

	useEffect(() => {
		setPlayer(new Audio());
	}, []);

	async function handleUserAudio(data) {
		const formats = await audio(data.url);
		player.src = formats[0].url;
		const albumImage = await squary(data.thumbnail);
		if ('mediaSession' in navigator) navigator.mediaSession.metadata = new MediaMetadata({
			title: data.title,
			artist: 'Work In Progress',
			album: 'Work In Progress',
			artwork: [{ src: albumImage }]
		});
		player.play();
	}

	async	function handleUserSearch(e) {
		if (e.key === 'Enter') {
			const items = await search(e.target.value);
			const com = items.map(item => {
				return <Item data={item} key={item.videoId} play={handleUserAudio} />;
			});
			setSearchItems(com);
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
					<input id='sbx' className={style.search} type='text' onKeyPress={handleUserSearch} placeholder='Search Here' />
				</div>

				<ul className={style.list}>{ searchItems }</ul>

				<div className={style.player}></div>
			</div>

			<script src="//cdn.jsdelivr.net/npm/eruda"></script>
			<script>eruda.init();</script>
		</>
	);
}
