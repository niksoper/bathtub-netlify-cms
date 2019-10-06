import React from 'react'

export interface CollapserProps {
  maxHeight?: number
}

interface State {
  isCollapsed: boolean
}

export default class Collapser extends React.Component<CollapserProps, State> {
  constructor(props) {
    super(props)

    this.state = {
      isCollapsed: true,
    }
  }

  render() {
    const { children } = this.props
    const maxHeight = !this.state || this.state.isCollapsed ? this.props.maxHeight || 200 : undefined
    return (
      <div className="collapser">
        <div className="collapsable" style={{ maxHeight }}>
          {children}
        </div>
        <div className="more">
          <button onClick={() => this.setState({ isCollapsed: !this.state.isCollapsed })}>Read more</button>
        </div>
      </div>
    )
  }
}