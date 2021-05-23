import React from 'react'

import style from './style.module.scss'

import player from '../../services/player'
import api from '../../services/api'
import ytdl from 'ytdl-core'
import yts from 'yt-search'

class Item extends React.Component<RC.ItemProps, RC.ItemState> {
  constructor(props: RC.ItemProps) {
    super(props)
    this.state = {
      isCurrentPlaying: false
    }
  }

  async play(info: yts.VideoSearchResult, playingState: boolean) {
    if (!playingState) {
      const media = await api.audio(info.url)
      const filtered = ytdl.chooseFormat(media, {
        quality: 'highestaudio'
      })
      player.src = filtered.url
      player.volume = 25
      player.play().then(() => {
        this.props.setPlayingNow(this.props.info.videoId)
        this.setState({ isCurrentPlaying: player.isPlaying })
      })
    } else {
      player.toggleState().then(() => {
        this.setState({ isCurrentPlaying: player.isPlaying })
      })
    }
  }

  render() {
    const isPlayingNow = this.props.info.videoId === this.props.playingNow
    return (
      <li
        className={style.item} style={{
          backgroundColor: isPlayingNow ? '#0008' : ''
        }}
      >
        <div className={style.image_container}
          onClick={() => this.play(this.props.info, isPlayingNow)}
        >
          <img
            className={style.image}
            src={this.props.info.image}
            alt={`${this.props.info.title}`}
            title={`${this.props.info.title}`}
            style={isPlayingNow ? {
              filter: 'blur(2px)'
            } : {}}
          />
          {isPlayingNow ? <span className={this.state.isCurrentPlaying ? style.play : style.pause}>H</span> : null}
        </div>

        <div className={style.title_container}>
          <p className={style.title}>{this.props.info.title}</p>
        </div>
      </li>
    )
  }
}

export default Item