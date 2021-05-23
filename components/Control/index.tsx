import React from 'react'

import style from './style.module.scss'

class Control extends React.Component<RC.ControlProps> {
  constructor(props: RC.ControlProps) {
    super(props)
  }

  render() {
    return (
      <footer className={style.container}></footer>
    )
  }
}

export default Control