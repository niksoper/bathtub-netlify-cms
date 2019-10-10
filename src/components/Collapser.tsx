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
    const { children, maxHeightCollapsed, maxHeightExpanded } = this.props
    const { isCollapsed } = this.state
    const maxHeight = !this.state || isCollapsed ? maxHeightCollapsed : maxHeightExpanded
    const fadeHeight = Math.min(100, maxHeightCollapsed * 0.5)
    const toggleLabel = `Read ${isCollapsed ? 'more' : 'less'}`
    return (
      <div className={`collapser ${isCollapsed ? '' : 'expanded'}`}>
        <div className="collapsable" style={{ maxHeight }}>
          {children}
          <div className="fadefoot hide-expanded" style={{ height: fadeHeight }}></div>
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