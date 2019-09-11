import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'

import { IconCredit } from '../components/IconCredit'
import { ExternalLink } from '../components/ExternalLink'

const Footer = class extends React.Component {
  render() {
    return (
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
              <div className="column is-6">
                <section>
                  <ul className="menu-list">
                    <li>
                      <ExternalLink className="navbar-item" href="/admin/">
                        Admin
                      </ExternalLink>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12 social">
                <a title="facebook" href="https://www.facebook.com/groups/bathtuborchestra/">
                  <img src={facebook} alt="Facebook" style={{ width: '1em', height: '1em' }} />
                </a>
                <a title="twitter" href="https://twitter.com/BathTubOrchest1">
                  <img src={twitter} alt="Twitter" style={{ width: '1em', height: '1em' }} />
                </a>
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
  }
}

export default Footer
