import { Component } from 'react'

class NotFound extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
     <h1
      style={{
        textAlign: 'center',
        width: '100%',
        height: '100%',
        color: '#000',
        background: 'linear-gradient(90deg, #777, #ccc)'
      }}
     >Error 404 - Not Found</h1>
    )
  }
}

export default NotFound
