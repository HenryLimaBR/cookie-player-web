import React from 'react'

import style from './style.module.scss'

import player from '../../services/player'
import api from '../../services/api'
import ytdl from 'ytdl-core'
import yts from 'yt-search'
import media from '../../services/media'
import log from '../../services/log'

import LoadingIcon from '../LoadingIcon'

class Item extends React.Component<RC.ItemProps, RC.ItemState> {
  constructor(props: RC.ItemProps) {
    super(props)
    this.state = {
      isCurrentPlaying: false, // Not Used Yet
      loadingMedia: false
    }
    this.setLoadingMedia = this.setLoadingMedia.bind(this)
  }

  private setLoadingMedia(state: boolean) {
    this.setState({ loadingMedia: state })
  }

  async play(info: yts.VideoSearchResult, isPlayingNow: boolean) {
    if (!isPlayingNow) {
      this.setLoadingMedia(true)
      const formats = await api.audio(info.videoId)
      if (typeof formats !== 'string') {
        const filtered = ytdl.chooseFormat(formats, {
          quality: 'highestaudio'
        })
        player.src = filtered.url
        player.volume = 25
        player.play(info.videoId).then(() => {
          this.props.setPlayingNow(this.props.info)
          this.setLoadingMedia(false)
          this.setState({ isCurrentPlaying: player.isPlaying }) // Not Used Yet
          media.set(info).then(() => {
            log.colored(info.title)
            document.title = info.title
          })
        })
      } else {
        this.setLoadingMedia(false)
        log.colored(`Item: ${formats}.`)
      }
    } else {
      player.toggleState().then(() => {
        this.setState({ isCurrentPlaying: player.isPlaying }) // Not Used Yet
      })
    }
  }

  dropdownMenu(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    e.preventDefault()
  }

  render() {
    const isPlayingNow = this.props.info === this.props.playingNow
    const playingClassState = isPlayingNow ? style.pause : style.play
    const isLoading = this.state.loadingMedia && !isPlayingNow
    return (
      <li
        className={style.item} style={{
          backgroundColor: isPlayingNow ? '#0008' : ''
        }}
        onContextMenu={this.dropdownMenu}
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
          {isLoading ? <LoadingIcon /> : null}
          <span
            className={`${style.music_state} ${playingClassState}`}
            style={isPlayingNow ? {
              opacity: 1
            } : {}}>H</span>
        </div>

        <div className={style.title_container}>
          <p className={style.title}>{this.props.info.title}</p>
        </div>
      </li>
    )
  }
}

export default Item