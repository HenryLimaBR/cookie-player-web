import React from 'react'
import Head from 'next/head'

import style from '../styles/index.module.scss'

import Content from '../components/Content'
import Control from '../components/Control'

import init from '../services/init'
import log from '../services/log'
import yts from 'yt-search'
import api from '../services/api'

import suggested from '../public/suggested.json'
import player from '../services/player'

class Home extends React.Component<RC.HomeProps, RC.HomeState> {
	constructor(props: RC.HomeProps) {
		super(props)
		this.state = {
			routerDest: 'search',
			searchResults: [],
			playingNow: {} as RC.playingNow
		}
		this.setRouterDest = this.setRouterDest.bind(this)
		this.setSearchResults = this.setSearchResults.bind(this)
		this.setPlayingNow = this.setPlayingNow.bind(this)
	}

	componentDidMount() {
		log.c('| Cookie Player Web - Welcome |')
		window.addEventListener('load', init)
		player.createEvent({
			event: 'ended',
			listener: () => {
				this.setState({ playingNow: {} as RC.playingNow })
			}
		})
		window.search = async (search) => {
			const data = await api.search(search)
			this.setSearchResults(data)
		}
		this.setSearchResults(suggested as yts.VideoSearchResult[])
	}

	// State Set Functions
	setRouterDest(route: string) {
		this.setState({ routerDest: route })
	}

	setSearchResults(data: yts.VideoSearchResult[] = []) {
		this.setState({ searchResults: data })
	}

	setPlayingNow(item: RC.playingNow) {
		this.setState({ playingNow: item })
	}

	render() {
		return (
			<>
				<Head>
					<title>Cookie Player</title>
				</Head>

				<main className={style.container}>
					<Content
						routerDest={this.state.routerDest}
						searchResults={this.state.searchResults}
						setSearchResults={this.setSearchResults}
						playingNow={this.state.playingNow}
						setPlayingNow={this.setPlayingNow}
					/>
					<Control setRouterDest={this.setRouterDest} />
				</main>
			</>
		)
	}
}

export default Home