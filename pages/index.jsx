import { Component } from 'react'
import Head from 'next/head'
import style from '../styles/index.module.css'

import SearchBar from '../components/SearchBar'
import List from '../components/List'
import PlayerBar from '../components/PlayerBar'
import Switch from '../components/Switch'
import Eruda from '../components/Eruda'

import player from '../services/player'
import cover from '../services/cover'

function init() {
  player.init()
  cover.init()
}

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

  componentDidMount() {
    window.addEventListener('load', init)
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
  				  <Switch select={this.state.currentPage}>
   	  				<List key='search' search={this.state.search} wait={this.state.wait} setWait={this.wait} setCover={this.cover} />
  				  </Switch>
		  		</div>

			  	<div className={style.player_container}>
		  			<PlayerBar setCover={this.cover} />
			  	</div>
	  		</div>

	  		<Eruda isDev={this.props.dev} />
	  	</>
  	)
  }
}

export default Home

export async function getStaticProps() {
  const dev = !process.env.VERCEL_ENV || process.env.VERCEL_ENV !== 'production'

  return {
    props: {
      dev
    }
  }
}
