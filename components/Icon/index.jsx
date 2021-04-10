import style from './style.module.css'
import Loader from '../Loader'

function Icon(props) {
  if (props.wait) return <Loader />
  const src  = props.cover ? props.cover : '/res/img/icon.png'
  return <img className={style.image} src={src} />
}

export default Icon
