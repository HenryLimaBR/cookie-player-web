import { useState, useEffect } from 'react';
import style from './style.module.css';
import { pause, createEvent } from '../../services/player';

export default function PlayerBar(props) {
	const [timeData, setTimeData] = useState(0);

	function reader({ target: player }) {
		const { currentTime: ct, duration: fn } = player;
		const perc = ct * 100 / fn;
		setTimeData(perc);
	}

	useEffect(() => {
		createEvent('timeupdate', reader);
	}, [true]);

	return (
		<div className={style.player_container}>
			<div className={style.slider_container}>
				<div className={style.slider_bar} style={{ width: `${timeData}%` }}></div>
			</div>

			<div className={style.button_container}>
				<button className={style.state_button} onClick={pause}></button>
			</div>
		</div>
	);
}
