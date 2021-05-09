import { Component } from 'react'

import style from '../styles/404.module.scss'


class NotFound extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1>Error 404 T-T</h1>
        <h2 style={{ cursor: 'pointer' }}>Ay Man! R u trying to access something?</h2>
      </div>
    )
  }
}

export default NotFound
