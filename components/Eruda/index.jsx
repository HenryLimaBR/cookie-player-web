import { Component } from 'react'

class Eruda extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.isDev) {
      return (
        <>
          <script src='https://cdn.jsdelivr.net/npm/eruda@2.4.1/eruda.min.js'></script>
          <script>eruda.init()</script>
        </>
      )
    }
    return null
  }
}

export default Eruda
