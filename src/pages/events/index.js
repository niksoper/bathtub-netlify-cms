import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import Layout from '../../components/Layout'
import { events } from './eventsData.js'

import './events.scss'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Events</h1>
              <div>
                {events.map(event => (
                  <Event event={event} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

const Event = ({ event }) => {
  const { name, location, date, start, end, category } = event

  return (
    <div className="event">
      <EventDate date={date} />
      <EventBody title={name} location={location} start={start} end={end} category={category} />
    </div>
  )
}

const EventDate = ({ date }) => {
  const mom = moment(date)

  return (
    <div className="event-date">
      <div className="weekday">{mom.format('ddd')}</div>
      <div className="date">{mom.format('D')}</div>
      <div className="month">{mom.format('MMM')}</div>
    </div>
  )
}

const EventBody = ({ title, location, start, end, category }) => {
  const eventClass = classNames('event-body', category)
  return (
    <div className={eventClass}>
      <div className="event-title">{title}</div>
      <div>
        {start && end && <div className="event-time">{`${start} - ${end}`}</div>}
        {location && <p>{location}</p>}
      </div>
    </div>
  )
}
