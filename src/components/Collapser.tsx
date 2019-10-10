import React from 'react'

import './Collapser.scss'

export interface CollapserProps {
  maxHeightCollapsed?: number
  maxHeightExpanded?: number
}

interface State {
  isCollapsed: boolean
}

export default class Collapser extends React.Component<CollapserProps, State> {
static defaultProps: CollapserProps = {
  maxHeightCollapsed: 200,
  maxHeightExpanded: 1000,
}

  constructor(props) {
    super(props)

    this.state = {
      isCollapsed: true,
    }
  }

  render() {
    const { children } = this.props
    const { isCollapsed } = this.state
    const maxHeight = !this.state || isCollapsed ? this.props.maxHeightCollapsed : this.props.maxHeightExpanded
    const toggleLabel = `Read ${isCollapsed ? 'more' : 'less'}`
    return (
      <div className="collapser">
        <div className={`collapsable ${isCollapsed ? '' : 'expanded'}`} style={{ maxHeight }}>
          {children}
        </div>
        <div className="more">
          <button
            className="toggle"
            onClick={() => this.setState({ isCollapsed: !isCollapsed })}
          >
            {toggleLabel}
          </button>
        </div>
      </div>
    )
  }
}