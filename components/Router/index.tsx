import React from 'react'

class Router extends React.Component<RC.RouterProps> {
  constructor(props: RC.RouterProps) {
    super(props)
  }

  error(message: string, color: string = '#ff5555') {
    console.warn(message)
    return <h1 style={{ color, userSelect: 'none' }}>{message}</h1>
  }

  render() {
    const children = this.props.children as React.ReactElement[]
    if (children && !children.length) {
      return children
    } else if (children && children.length > 1) {
      const filtered = children.filter(child => child.key === this.props.routerDest)
      return filtered ? filtered : children[0]
    } else {
      return this.error("Router Can't Work Empty :/", '#ffb86c')
    }
  }
}

export default Router