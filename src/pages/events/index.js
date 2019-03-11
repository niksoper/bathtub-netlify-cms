import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import Layout from '../../components/Layout'

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
                {futureEvents.map(event => (
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

const events = [
  {
    name: 'Rehearsal break',
    date: '2019-03-12',
    category: 'break',
  },
  {
    name: 'Rehearsal',
    date: '2019-03-19',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-03-26',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Open Mic',
    location: "St Michael's, Broad St, Bath BA1 5LJ",
    date: '2019-03-29',
    start: '19:00',
    end: '22:00',
    category: 'gig',
  },
  {
    name: 'Rehearsal',
    date: '2019-04-02',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-04-09',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal break',
    date: '2019-04-16',
    category: 'break',
  },
  {
    name: 'Rehearsal',
    date: '2019-04-23',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-04-30',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-05-07',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-05-14',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Party in the city',
    location: 'Nexus, Nelson Place, Bath BA1 5DA',
    date: '2019-05-17',
    start: '18:45',
    end: '19:15',
    category: 'gig',
  },
  {
    name: 'Rehearsal',
    date: '2019-05-21',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal break',
    date: '2019-05-28',
    category: 'break',
  },
  {
    name: 'Rehearsal',
    date: '2019-06-04',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Bath Fringe Festival',
    location: "St Michael's, Broad St, Bath BA1 5LJ",
    date: '2019-06-09',
    start: '19:30',
    end: '21:30',
    category: 'gig',
  },
  {
    name: 'Rehearsal',
    date: '2019-06-11',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-06-18',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-06-25',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-07-02',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-07-09',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-07-16',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal',
    date: '2019-07-23',
    start: '19:30',
    end: '21:30',
    category: 'rehearsal',
  },
  {
    name: 'Rehearsal break',
    date: '2019-07-30',
    category: 'break',
  },
]

const futureEvents = events.filter(event => moment(event.date).isAfter(moment()))
