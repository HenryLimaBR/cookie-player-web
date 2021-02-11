import { useState, useEffect } from 'react';
import style from './style.module.css';

import Item from '../Item';

export default function List(props) {
	const [items, setItems] = useState(null);

function update({ data, play }) {
		console.log(`Updating: ${data.length} Results!`);
 	  return data.map((item, index) => {
   	  return (<Item data={item} index={index + 1} key={item.videoId} play={play} />);
   	});
}

	useEffect(() => {
		props.data ? setItems(update(props)) : console.log('Skipping Update!');
	}, [props.data]);

	return <ul className={style.list}>{items}</ul>;
}
