import React from 'react'

import './IconCredit.scss'

const authors = [{
  name: 'Freepik',
  url: 'https://www.freepik.com/'
}]

export function IconCredit() { 
  return (
    <div className="icon-credit">
    Icons made by
    {authors.map(a => (
      <a target="_blank" href={a.url} title={a.name}>{a.name}</a>
    ))}
    from
    <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    is licensed by
    <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
    CC 3.0 BY</a>
    </div>
  )
}
