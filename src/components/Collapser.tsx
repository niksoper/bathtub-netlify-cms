import React from 'react'

import './Collapser.scss'

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
    const toggleLabel = `Read ${this.state.isCollapsed ? 'more' : 'less'}`
    return (
      <div className="collapser">
        <div className="collapsable" style={{ maxHeight }}>
          {children}
        </div>
        <div className="more">
          <button className="toggle" onClick={() => this.setState({ isCollapsed: !this.state.isCollapsed })}>{toggleLabel}</button>
        </div>
      </div>
    )
  }
}