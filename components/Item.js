import index from '../styles/index.module.css';

export default function Item(props) {
  function send() {
    props.play(props.data);
  }

  return (
    <li className={index.list_item} onClick={send}>
    	<img className={index.item_image} src={props.data.image} />
      <div className={index.item_info}>
       	<p className={index.item_text}>{props.data.title}</p>
       	<p className={index.item_text}>{props.data.views} Views</p>
     	</div>
   	</li>
  );
}
