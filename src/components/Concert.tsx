import React from 'react'
import { ExternalLink } from './ExternalLink';


interface ConcertProps {
  name: string
  location: string
  description: string
  date: string
  time?: string
  ticketUrl?: string
}

const Concert: React.SFC<ConcertProps> = ({ name, location, description, date, time, ticketUrl }) => (
  <div className="concert">
    <h1>{`${name}, ${date}${time ? `, ${time}` : ''}`}</h1>
    {!!ticketUrl &&
      <ExternalLink href={ticketUrl} title={`Buy tickets for ${name}`} />
    }
    <p>{`At ${location}`}</p>
    <p>{description}</p>
  </div>
)

export default Concert
