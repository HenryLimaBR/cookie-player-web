import { Component } from 'react'

class Switch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const types = {
      'object': () => (this.props.children),
      'array': () => (this.props.children.filter(e => (e.key === this.props.select))),
      'undefined': () => (<h1>Empty Switch</h1>),
      'error': () => (<h1>Type Error</h1>)
    }
    return types[typeof this.props.children]() || types['error']()
  }
}

export default Switch
