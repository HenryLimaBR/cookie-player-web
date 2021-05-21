import React from 'react'

import style from './style.module.scss'

import player from '../../services/player'
import api from '../../services/api'
import ytdl from 'ytdl-core'

class Item extends React.Component<RC.ItemProps, RC.ItemState> {
  constructor(props: RC.ItemProps) {
    super(props)
  }

  async play(url: string) {
    this.props.setPlayingNow(this.props.info.videoId)
    const media = await api.audio(url)
    const filtered = ytdl.chooseFormat(media, {
      quality: 'highestaudio'
    })
    player.src = filtered.url
    player.volume = 25
    player.play()
  }

  render() {
    const isPlayingNow = this.props.info.videoId === this.props.playingNow
    return (
      <li className={style.item} style={{
        backgroundColor: isPlayingNow ? '#0008' : ''
      }}>
        <div className={style.image_container}>
          <img
            className={style.image}
            src={this.props.info.image}
            alt={`${this.props.info.title}`}
            title={`${this.props.info.title}`}
            onClick={() => !isPlayingNow ? this.play(this.props.info.url) : null }
            style={isPlayingNow ? {
              filter: 'grayscale(100%) blur(1px)'
            } : {}}
          />
          {isPlayingNow ? <span className={style.play}></span> : null}
        </div>

        <div className={style.title_container}>
          <p className={style.title}>{this.props.info.title}</p>
        </div>
      </li>
    )
  }
}

export default Item