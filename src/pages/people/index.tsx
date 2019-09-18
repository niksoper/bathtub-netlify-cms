import React from 'react'

import Layout from '../../components/Layout'
import { Musician } from '../../components/Musician'

export default class PeopleIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Meet the musicians</h1>
            </div>
            <p>
              It goes without saying that the people are what the orchestra is all about. Meet some of our musicians:
            </p>
            <div>
              <Musician name="Alan" instrument="trombone" />
              <Musician name="Dave" instrument="flute" />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
