import React from 'react'

import './Jumbotron.scss'

export const Jumbotron = ({ children }) => (
  <div className="jumbotron">
    <div className="logo-wrap">{children}</div>
  </div>
)
