import React from 'react'

import style from './style.module.scss'

class SideButton extends React.Component {
  render() {
    return (
      <main className={style.container}>
        <div className={style.icon}>A</div>
      </main>
    )
  }
}

export default SideButton