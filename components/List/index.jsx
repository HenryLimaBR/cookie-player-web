import { Component, createRef } from 'react'
import style from './style.module.css'

import Item from '../Item'

class List extends Component {
	constructor(props) {
	  super(props)
	  this.listbox = createRef(null)
	  this.state = {
	    items: null
	  }
	  this.update = this.update.bind(this)
	}

  update() {
		console.log(`List: Updating ${this.props.search.length} Results!`)
		this.listbox.current.scrollTop = 0
 	  return this.props.search.map((item, index) => {
   	  return <Item item={item} index={index + 1} key={item.videoId} setWait={this.props.setWait} wait={this.props.wait} setCover={this.props.setCover} />
   	})
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.setState({
        items: this.update()
      })
    }
  }

	render() {
	  return <ul className={style.list} ref={this.listbox}>{this.state.items}</ul>
	}
}

export default List
