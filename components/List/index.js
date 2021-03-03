import { useState, useEffect, useRef } from 'react';
import style from './style.module.css';

import Item from '../Item';

export default function List(props) {
	const listbox = useRef(null);
	const [items, setItems] = useState(null);

function update({ data, setWait, wait, setCover }) {
		console.log(`List: Updating ${data.length} Results!`);
		listbox.current.scrollTop = 0;
 	  return data.map((item, index) => {
   	  return <Item data={item} index={index + 1} key={item.videoId} setWait={setWait} wait={wait} setCover={setCover} />;
   	});
}

	useEffect(() => {
		props.data ? setItems(update(props)) : console.log('List: Skipping Update!');
	}, [props.data]);

	return <ul className={style.list} ref={listbox}>{items}</ul>;
}
