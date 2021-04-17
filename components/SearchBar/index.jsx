import { Component, createRef } from 'react'
import style from './style.module.css'
import api from '../../services/api'

import Icon from '../Icon'

class SearchBar extends Component {
	constructor(props) {
	  super(props)
	  this.inputbox = createRef(null)
	  this.search = this.search.bind(this)
	  this.clearInput = this.clearInput.bind(this)
  }

	async search(e) {
		if(e.key === 'Enter') {
			this.props.setWait(true)
			const data = await api.search(this.inputbox.current.value)
			this.props.setSearch(data)
			this.props.setWait(false)
		}
	}

	clearInput() {
		if (this.inputbox.current.value.length > 0) {
			this.inputbox.current.value = ''
		}
		this.inputbox.current.focus()
	}

	render() {
	  return (
		  <div className={style.search_bar}>
		  	<div className={style.image_container}>
			  	<Icon wait={this.props.wait} cover={this.props.cover} />
		  	</div>

			  <div className={style.search_container}>
				  <input className={style.input} type='text' onKeyPress={this.search} ref={this.inputbox} placeholder='Search' />
  				<button className={style.clear_button} onClick={this.clearInput}>&#x2715;</button>
	  		</div>
  		</div>
	  )
  }
}

export default SearchBar
