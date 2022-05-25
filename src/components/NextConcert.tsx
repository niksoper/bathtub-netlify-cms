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
        flyer: file(relativePath: { glob: "*2022-jun*" }) {
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
        date="11th June 2022"
        time="19:00"
        location="Burdall's Yard, 7A Angelo Terrace, Bath BA1 5NH"
        ticketUrl="https://www.ticketsource.co.uk/bathtuborchestra/e-amqoae"
        description="We're excited to be returning to the Bath Fringe Festival to fill the vaulted ceilings of Burdall's Yard with our unique sound for the first time. We'll also be joined again by our friends in the Afternoon Rocks Choir from Corsham."
      />
    )}
  />
)
