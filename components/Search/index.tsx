import React from 'react'

import style from './style.module.scss'

import Item from '../Item'

class Search extends React.Component<RC.SearchProps> {
  constructor(props: RC.SearchProps) {
    super(props)
  }

  render() {
    const elements = this.props.searchResults.map((item, index) => (
      <Item
        info={item}
        index={index + 1}
        key={item.videoId}
        playingNow={this.props.playingNow}
        setPlayingNow={this.props.setPlayingNow}
      />
    ))
    return (
      <main className={style.container}>
        <ul className={style.search_container}>
          {elements}
        </ul>
      </main>
    )
  }
}

export default Search