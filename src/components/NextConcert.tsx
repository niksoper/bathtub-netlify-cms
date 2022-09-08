import React from 'react'

import './NextConcert.scss'
import { StaticQuery, graphql } from 'gatsby'
import { ExternalLink } from './ExternalLink'

interface ConcertProps {
  location: string
  date: string
  flyerSrc: string
  description?: string
  time?: string
  ticketUrl?: string
}

const NextConcert: React.SFC<ConcertProps> = ({ flyerSrc, date, time, location, description, ticketUrl }) => {
  const ticketLinkTitle = 'Book now'
  return (
    <div className="next-concert-panel is-parent">
      <article className="tile is-child box notification">
        <h1>{`${date}${time ? `, ${time}` : ''}`}</h1>
        <p>{location}</p>
        <ExternalLink href={ticketUrl} title={ticketLinkTitle}>
          <div className="flyer-wrapper">
            <img alt="BathTub Orchestra Christmas concert" src={flyerSrc} />
          </div>
        </ExternalLink>
        {!!description && <p>{description}</p>}
        {!!ticketUrl && (
          <ExternalLink href={ticketUrl} title={ticketLinkTitle}>
            <img
              style={{ border: 0, width: 130, height: 56 }}
              alt={ticketLinkTitle}
              src="https://www.ticketsource.co.uk/images/bookNow/bookNow-black-small.png"
            />
          </ExternalLink>
        )}
      </article>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        flyer: file(relativePath: { glob: "bath-feast.png" }) {
          childImageSharp {
            fluid(maxWidth: 721, quality: 100) {
              src
            }
          }
        }
      }
    `}
    render={data => (
      <NextConcert
        flyerSrc={data.flyer.childImageSharp.fluid.src}
        date="24th September 2022"
        time="10:30 AM"
        location="Milsom Street, Bath"
        description="We'll be playing for an hour - come along to hear some familiar tunes like you've never heard them before!"
      />
    )}
  />
)
