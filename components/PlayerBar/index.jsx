import { Component } from 'react'
import style from './style.module.css'
import player from '../../services/player'

const pbStyle = {
	play: style.play,
	pause: style.pause
};

class PlayerBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btState: pbStyle.play,
      currentTime: 0,
      duration: 0,
      percentage: 0
    }
    this.timeupdateEvent = this.timeupdateEvent.bind(this)
    this.endedEvent = this.endedEvent.bind(this)
    this.pauseEvent = this.pauseEvent.bind(this)
    this.playEvent = this.playEvent.bind(this)
    this.durationchangeEvent = this.durationchangeEvent.bind(this)
  }

	timeupdateEvent({ target: element }) {
		const { currentTime, duration } = element
		const percentage = currentTime * 100 / duration
		this.setState({ currentTime, percentage })
	}

	endedEvent() {
		this.setState({
		  data: 0,
		  btState: pbStyle.play
		})
		this.props.setCover(null);
	}

	pauseEvent() { this.setState({ btState: pbStyle.play }) }
	playEvent() { this.setState({ btState: pbStyle.pause }) }

  durationchangeEvent ({ target: element }) {
    const { duration } = element
    this.setState({ duration })
  }

	componentDidMount() {
		player.createEvent('durationchange', this.durationchangeEvent)
		player.createEvent('timeupdate', this.timeupdateEvent)
		player.createEvent('ended', this.endedEvent)
		player.createEvent('pause', this.pauseEvent)
		player.createEvent('play', this.playEvent)
	};

	playBtHandler() {
		player.toggleState()
	}

  render() {
  	return (
	  	<div className={style.player_container}>
		  	<div className={style.slider_container}>
			  	<div className={style.slider_bar}>
  					<div className={style.slider_bar_roll} style={{ width: `${this.state.percentage}%` }}></div>
	  			</div>
  			</div>

  			<div className={style.button_container}>
	  			<button className={style.state_button} onClick={this.playBtHandler}>
		  			<span className={this.state.btState}></span>
			  	</button>
  			</div>
	  	</div>
  	)
  }
}

export default PlayerBar
