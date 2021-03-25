import { Component } from 'react'
import style from './style.module.css'

class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: { '--color': '#fff' }
    }
    this.update = this.update.bind(this)
  }

  update() {}

  render() {
    return (
		  <div className={style.loader_container}>
			  <div className={style.spinner} style={this.state.spinner}></div>
		  </div>
    )
  }
}

export default Loader
