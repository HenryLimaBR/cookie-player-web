import player from '../../services/player';
import { getAudio } from '../../services/api';
import media from '../../services/media';

import style from './style.module.css';

export default function Item({ data, index, setWait, wait, setCover }) {
  async function play() {
		setWait(true);
		const audio = await getAudio(data.url);
		player.src = audio[0].url;
		await media(data);
		await player.play();
		setCover(data.image);
		setWait(false);
  }

  return (
    <li className={style.item} onClick={play} style={{ animationDelay: `${index * 100}ms` }}>
			<div className={style.imgcontainer}>
    		<img className={style.image} src={data.image} />
				<p className={style.timestamp}>{data.timestamp}</p>
			</div>
      <div className={style.info}>
       	<p className={style.text}>{data.title}</p>
       	<p className={style.text}>{data.views} Views</p>
     	</div>
   	</li>
  );
}
