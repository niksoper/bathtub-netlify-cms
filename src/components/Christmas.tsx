import React from 'react'

import './Christmas.scss'
import { Link, StaticQuery, graphql } from 'gatsby'
import { ExternalLink } from './ExternalLink'

const ChristmasPanel: React.SFC<{ flyerSrc: string }> = ({ flyerSrc }) => (
  <div className="christmas-panel is-parent">
    <h3>
      <span className="icon left"><i className="fas fa-3x fa-air-freshener"></i></span>
      Christmas
      <span className="icon right"><i className="fas fa-3x fa-air-freshener"></i></span>
    </h3>
    <article className="tile is-child box notification">
      <div className="flyer-wrapper">
        <img alt="BathTub Orchestra Christmas concert" src={flyerSrc} />
      </div>
      <p>We're having a christmas concert featuring traditional carols, modern classics and a few surprises!</p>
      <p>BathTub Orchestra will be joined by special guests - Priordonnas - a ladies choir formed
        at Paragon school in Bath.</p>
      <ExternalLink href="https://www.ticketsource.co.uk/bathtuborchestra">
        <img style={{border:0, width:130, height:56 }} alt="Book now"
            src="https://www.ticketsource.co.uk/images/bookNow/bookNow-black-small.png" />
      </ExternalLink>        
    </article>
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        flyer: file(relativePath: {glob: "*xmas*"}) {
          childImageSharp {
            fluid(maxWidth: 721, quality: 100) {
              src
            }
          }
        }
      }
    `}
    render={data => <ChristmasPanel flyerSrc={data.flyer.childImageSharp.fluid.src} />}
  />
)