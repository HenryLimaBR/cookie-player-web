import player from '../../services/player'
import api from '../../services/api'
import media from '../../services/media'

import style from './style.module.css'

export default function Item({ item, index, setWait, wait, setCover }) {
  async function play() {
		setWait(true)
		const audio = await api.audio(item.url);
		player.src = audio[0].url;
		await media.set(item)
		await player.play();
		setCover(item.image);
		setWait(false);
  }

  return (
    <li className={style.item} onClick={play} style={{ animationDelay: `${index * 100}ms` }}>
			<div className={style.imgcontainer}>
    		<img className={style.image} src={item.image} />
				<p className={style.timestamp}>{item.timestamp}</p>
			</div>
      <div className={style.info}>
       	<p className={style.text}>{item.title}</p>
       	<p className={style.text}>{item.views} Views</p>
     	</div>
   	</li>
  );
}
