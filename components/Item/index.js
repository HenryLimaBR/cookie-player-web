import style from './style.module.css';

export default function Item({ data, play, index }) {
  function send() {
    play(data);
  }

  return (
    <li className={style.item} onClick={send} style={{ animationDelay: `${index * 125}ms` }}>
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
