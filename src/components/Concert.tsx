import React from 'react'
import moment from 'moment'
import { ExternalLink } from './ExternalLink'

import './Concert.scss'

export interface ConcertProps {
  location: string
  date: moment.Moment
  description?: string
  time?: string
  ticketUrl?: string
}

export const FeaturedConcert: React.FunctionComponent<ConcertProps> = ({ location, description, date, time, ticketUrl }) => {
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

export interface ConcertDatesProps {
  concerts: ConcertProps[]
}

const ConcertDate: React.FunctionComponent<{ concert: ConcertProps}> = ({ concert: { date, location } }) => {
  return (
    <div className="container concert-date">
      <div className="columns">
        <div className="column is-6">
          <div className="date">{date.format('dddd Do MMM')}</div>
        </div>
        <div className="column is-6">
          <div className="location">{location}</div>
        </div>
      </div>
    </div>
  )
}

export const ConcertDates: React.FunctionComponent<ConcertDatesProps> = ({ concerts }) => {
  return (
    <div className="concert-dates">
      <ul>
        <li>{concerts.map(c => <ConcertDate concert={c} />)}</li>
      </ul>
    </div>
  )
}
