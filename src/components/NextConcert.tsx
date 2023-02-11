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
            <img alt="Orchestra double header. Ramshackle Orchestra and BathTub Orchestra." src={flyerSrc} />
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
        flyer: file(relativePath: { glob: "concert-2023-mar-christchurch.png" }) {
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
        date="25th March 2023"
        time="7:00 PM"
        location="Christchurch, Julian Road, Bath BA1 2RH"
        description="Two local community orchestras coming together for the first time!"
        ticketUrl="https://www.ticketsource.co.uk/bathtuborchestra"
      />
    )}
  />
)
