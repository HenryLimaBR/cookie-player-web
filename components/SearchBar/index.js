import { useState, useEffect, useRef } from 'react';
import style from './style.module.css';
import api from '../../services/api';

import Loader from '../Loader';

export default function SearchBar(props) {
	const inputbox = useRef(null);

	async function search(e) {
		if(e.key === 'Enter') {
			props.setWait(true);
			const data = await api.search(inputbox.current.value);
			props.setSearch(data);
			props.setWait(false);
		}
	}

	function clearInput() {
		if (inputbox.current.value.length > 0) {
			inputbox.current.value = '';
		}
		inputbox.current.focus();
	}

	return (
		<div className={style.search_bar}>
			<div className={style.search_container}>
				<input className={style.input} type='text' onKeyPress={search} ref={inputbox} placeholder='Search' />
				<button className={style.clear_button} onClick={clearInput}>&#x2715;</button>
			</div>

			<div className={style.image_container}>
				<Icon wait={props.wait} cover={props.cover} />
			</div>
		</div>
	);
}

function Icon({ wait, cover }) {
	if (wait) return <Loader color="#fff" />
	const crrnt = cover ? cover : '/res/img/icon.png';
	return <img className={style.image} src={crrnt} />
}
