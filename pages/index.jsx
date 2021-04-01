import { Component } from 'react'
import Head from 'next/head'
import style from '../styles/index.module.css'

import { init } from  '../services/init'

import SearchBar from '../components/SearchBar'
import List from '../components/List'
import PlayerBar from '../components/PlayerBar'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null,
      wait: false,
      cover: null
    }
    this.search = this.search.bind(this)
    this.wait = this.wait.bind(this)
    this.cover = this.cover.bind(this)
  }

	componentDidMount() { init() }

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
	  			<div className={style.search_containet}>
		  			<SearchBar setSearch={this.search} wait={this.state.wait} setWait={this.wait} cover={this.state.cover} />
			  	</div>

  				<div className={style.list_container}>
	  				<List search={this.state.search} wait={this.state.wait} setWait={this.wait} setCover={this.cover} />
		  		</div>

			  	<div className={style.player_container}>
		  			<PlayerBar setCover={this.cover} />
			  	</div>
	  		</div>

		  	<script src="//cdn.jsdelivr.net/npm/eruda"></script>
  			<script>eruda.init();</script>
	  	</>
  	)
  }
}

export default Home
