import React from 'react'

import { ExternalLink } from './ExternalLink'

import './IconCredit.scss'

const authors = [
  {
    name: 'Freepik',
    url: 'https://www.freepik.com/',
  },
]

export function IconCredit() {
  return (
    <div className="icon-credit">
      Icons made by
      {authors.map(a => (
        <ExternalLink key={a.name} href={a.url} title={a.name}>
          {a.name}
        </ExternalLink>
      ))}
      from
      <ExternalLink href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </ExternalLink>
      licensed by
      <ExternalLink href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">
        CC 3.0 BY
      </ExternalLink>
    </div>
  )
}
