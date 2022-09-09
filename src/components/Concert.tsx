import React from 'react'
import moment from 'moment'
import { ExternalLink } from './ExternalLink'

import './Concert.scss'

export interface ConcertProps {
  location: string
  date: moment.Moment
  time?: moment.Moment
  description?: string
  ticketUrl?: string
}

export function getConcertDate(concert: ConcertProps): moment.Moment {
  return concert.date
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

const ConcertDate: React.FunctionComponent<{ concert: ConcertProps}> = ({ concert: { date, time, location, description } }) => {
  const fullDescription = React.useMemo(() => time ? `${time.format('h:mma')} - ${description}` : description, [description, time])

  return (
    <div className="concert-date">
      <div className="date">{date.format('dddd Do MMM')}</div>
      <div className="location">{location}</div>
      {description ? <div className="description">{fullDescription}</div> : null}
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
