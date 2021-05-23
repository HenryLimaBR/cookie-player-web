import React from 'react'

import style from './style.module.scss'

import Router from '../Router'
import Search from '../Search'
import SideButton from '../SideButton'

class Content extends React.Component<RC.ContentProps> {
  constructor(props: RC.ContentProps) {
    super(props)
  }

  render() {
    return (
      <main className={style.container}>
        <SideButton />
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