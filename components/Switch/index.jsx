import { Component } from 'react'

class Switch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    switch (typeof this.props.children) {
      case 'object': return this.props.children
      case 'array': return this.props.children.filter(e => (e.key === this.props.select))
      case 'undefined': return <h1>Empty Menu</h1>
      default: throw new Error('Menu Received a Unexpected Type')
    }
  }
}

export default Switch
