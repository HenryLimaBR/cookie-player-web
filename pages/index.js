import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

import index from '../styles/index.module.css';

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
		player.play();
		if ('mediaSession' in navigator) navigator.mediaSession.metadata = new MediaMetadata({
			title: data.title,
			artwork: [{ src: data.image }]
		});
		document.getElementById('sbx').value = '';
		setSearchItems(null);
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

			<div className={index.container}>

				<div className={index.search_box}>
					<input id='sbx' className={index.search} type='text' onKeyPress={handleUserSearch} placeholder='Search Here' />
				</div>

				<ul className={index.list}>{ searchItems }</ul>

				<div className={index.player}></div>
			</div>

			<script src="//cdn.jsdelivr.net/npm/eruda"></script>
			<script>eruda.init();</script>
		</>
	);
}
