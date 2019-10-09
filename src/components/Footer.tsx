import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'

import { IconCredit } from './IconCredit'
import { ExternalLink } from './ExternalLink'

const Footer: React.SFC<{}> = () => (
  <footer className="footer has-background-black has-text-white-ter">
    <div className="content has-text-centered has-background-black has-text-white-ter">
      <div className="container has-background-black has-text-white-ter">
        <div className="columns">
          <div className="column is-6">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12 social">
            <ExternalLink title="facebook" href="https://www.facebook.com/bathtuborchestra.community/">
              <img src={facebook} alt="Facebook" style={{ width: '1em', height: '1em' }} />
            </ExternalLink>
            <ExternalLink title="twitter" href="https://twitter.com/BathTubOrchest1">
              <img src={twitter} alt="Twitter" style={{ width: '1em', height: '1em' }} />
            </ExternalLink>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <IconCredit />
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
