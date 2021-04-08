import { Component } from 'react'
import Head from 'next/head'
import style from '../styles/index.module.css'

import SearchBar from '../components/SearchBar'
import List from '../components/List'
import PlayerBar from '../components/PlayerBar'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null,
      wait: false,
      cover: null,
      currentPage: 'search'
    }
    this.search = this.search.bind(this)
    this.wait = this.wait.bind(this)
    this.cover = this.cover.bind(this)
  }

	search(value) { this.setState({ search: value }) }
	wait(value) { this.setState({ wait: value }) }
  cover(value) { this.setState({ cover: value }) }

  render() {
  	return (
  		<>
	  		<Head>
	  			<title>Cookie Player</title>
		  	</Head>

  			<div className={style.container}>
	  			<div className={style.search_container}>
		  			<SearchBar setSearch={this.search} wait={this.state.wait} setWait={this.wait} cover={this.state.cover} />
			  	</div>

  				<div className={style.list_container}>
  				  <Menu select={this.state.currentPage}>
   	  				<List key='search' search={this.state.search} wait={this.state.wait} setWait={this.wait} setCover={this.cover} />
  				  </Menu>
		  		</div>

			  	<div className={style.player_container}>
		  			<PlayerBar setCover={this.cover} />
			  	</div>
	  		</div>

		  	<script src="//cdn.jsdelivr.net/npm/eruda"></script>
  			<script>eruda.init()</script>
	  	</>
  	)
  }
}

export default Home

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    switch (typeof this.props.children) {
      case 'object': return this.props.children
      case 'array': return this.props.children.filter(e => (e.key === this.props.select))
      case 'undefined': return <h1>Empty Menu</h1>
      default: throw new Error('Menu Received a Unexpected Type')
    }
  }
}
