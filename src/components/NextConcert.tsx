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
        flyer: file(relativePath: { glob: "*2022-mar*" }) {
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
        date="19th March 2022"
        time="19:30"
        location="St Swithin's Church, The Paragon, Bath, BA1 5LY"
        ticketUrl="https://www.ticketsource.co.uk/booking/t-rerydz"
        description="Join us for an entertaining evening of live music featuring familiar tunes from the worlds of pop, rock and film. We'll also be joined by the Afternoon Rocks Choir from Corsham."
      />
    )}
  />
)
