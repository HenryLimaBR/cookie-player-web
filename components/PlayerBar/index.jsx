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
      time: 0,
      btState: pbStyle.play
    }
    this.timeupdateEvent = this.timeupdateEvent.bind(this)
    this.endedEvent = this.endedEvent.bind(this)
    this.pauseEvent = this.pauseEvent.bind(this)
    this.playEvent = this.playEvent.bind(this)
  }

	timeupdateEvent({ target: element }) {
		const { currentTime: ct, duration: fn } = element
		const perc = ct * 100 / fn
		this.setState({
		  time: perc
		})
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

	componentDidMount() {
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
  					<div className={style.slider_bar_roll} style={{ width: `${this.state.time}%` }}></div>
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
