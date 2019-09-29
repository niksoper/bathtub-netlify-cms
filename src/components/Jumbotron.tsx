import React from 'react'

import './Jumbotron.scss'

export const Jumbotron: React.SFC<{}> = ({ children }) => (
  <div className="jumbotron">
    <div className="logo-wrap">{children}</div>
  </div>
)
