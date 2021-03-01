import { useState, useEffect } from 'react';
import style from './style.module.css';
import { pause, createEvent } from '../../services/player';

const pbStyle = {
	play: style.play,
	pause: style.pause
};

export default function PlayerBar(props) {
	const [timeData, setTimeData] = useState(0);
	const [playBtSt, setPlayBtSt] = useState(pbStyle.play);

	function timeupdateEvent({ target: player }) {
		const { currentTime: ct, duration: fn } = player;
		const perc = ct * 100 / fn;
		setTimeData(perc);
	}

	function endedEvent() {
		setPlayBtSt(pbStyle.play);
		setTimeData(0);
		props.setCover(null);
	}

	function pauseEvent() { setPlayBtSt(pbStyle.play) }
	function playEvent() { setPlayBtSt(pbStyle.pause) }

	useEffect(() => {
		createEvent('timeupdate', timeupdateEvent);
		createEvent('ended', endedEvent);
		createEvent('pause', pauseEvent);
		createEvent('play', playEvent);
	}, [true]);

	function playBtHandler() {
		pause();
	}

	return (
		<div className={style.player_container}>
			<div className={style.slider_container}>
				<div className={style.slider_bar}>
					<div className={style.slider_bar_roll} style={{ width: `${timeData}%` }}></div>
				</div>
			</div>

			<div className={style.button_container}>
				<button className={style.state_button} onClick={playBtHandler}>
					<span className={playBtSt}></span>
				</button>
			</div>
		</div>
	);
}
