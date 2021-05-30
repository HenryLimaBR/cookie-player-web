import React from 'react'
import style from './style.module.scss'

class LoadingIcon extends React.Component {
  constructor(props: object) {
    super(props) 
  }

  render() {
    return (
      <div className={style.loader_container}>
        <div className={style.spinner}></div>
      </div>
    )
  }
}

export default LoadingIcon