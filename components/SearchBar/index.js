import { useState, useEffect, useRef } from 'react';
import style from './style.module.css';
import { getSearch } from '../../services/api';
import Loader from 'react-loader-spinner';

export default function SearchBar(props) {
	const inputbox = useRef(null);

	async function search(e) {
		if(e.key === 'Enter') {
			props.setWait(true);
			const data = await getSearch(inputbox.current.value);
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
				<button className={style.clear_button} onClick={clearInput}>X</button>
			</div>

			<div className={style.image_container}>
				<Icon wait={props.wait} />
			</div>
		</div>
	);
}

function Icon({ wait }) {
	if (wait) return <Loader type='TailSpin' color='white' width={48} height={48} />
	return <img className={style.image} src='/res/img/icon.png' />
}
