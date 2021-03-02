import style from './style.module.css';

export default function Loader({ color, w, h }) {

	const container = {
		width: w ? `${w}px` : '100%',
		height: h ? `${h}px` : '100%'
	};

	const spinner = {
		'--color': color ? color : '#fff'
	};

  return (
		<div className={style.loader_container} style={container}>
			<div className={style.spinner} style={spinner}></div>
		</div>
  );
}
