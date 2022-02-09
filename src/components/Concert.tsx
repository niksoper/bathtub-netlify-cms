import React from 'react'
import { ExternalLink } from './ExternalLink'

import './Concert.scss'

interface ConcertProps {
  location: string
  date: string
  description?: string
  time?: string
  ticketUrl?: string
}

const Concert: React.SFC<ConcertProps> = ({ location, description, date, time, ticketUrl }) => {
  const title = 'Book now'
  return (
    <div className="concert">
      <h1>{`${date}${time ? `, ${time}` : ''}`}</h1>
      <p>{location}</p>
      {!!description && <p>{description}</p>}
      {!!ticketUrl && (
        <ExternalLink href={ticketUrl} title={title}>
          <img
            style={{ border: 0, width: 130, height: 56 }}
            alt={title}
            src="https://www.ticketsource.co.uk/images/bookNow/bookNow-black-small.png"
          />
        </ExternalLink>
      )}
    </div>
  )
}

export default Concert
