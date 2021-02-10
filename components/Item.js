import style from './Item.module.css';

export default function Item({ data, play }) {
  function send() {
    play(data);
  }

  return (
    <li className={style.item} onClick={send}>
    	<img className={style.image} src={data.image} />
      <div className={style.info}>
       	<p className={style.text}>{data.title}</p>
       	<p className={style.text}>{data.views} Views</p>
     	</div>
   	</li>
  );
}
