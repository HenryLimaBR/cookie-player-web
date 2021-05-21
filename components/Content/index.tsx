import React from 'react'

import style from './style.module.scss'

import Router from '../Router'
import Search from '../Search'
import api from '../../services/api'

class Content extends React.Component<RC.ContentProps, RC.ContentState> {
  constructor(props: RC.ContentProps) {
    super(props)
  }
  
  render() {
    return (
      <main className={style.container}>
        <Router routerDest={this.props.routerDest}>
          <Search
            key='search'
            searchResults={this.props.searchResults}
            setSearchResults={this.props.setSearchResults}
            playingNow={this.props.playingNow}
            setPlayingNow={this.props.setPlayingNow}
          />
        </Router>
      </main>
    )
  }
}

export default Content