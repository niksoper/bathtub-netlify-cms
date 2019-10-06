import React from 'react'

import Layout from '../../components/Layout'
import Musicians from '../../components/Musicians'

export default class PeopleIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Our musicians</h1>
              <p>Of course, without musicians there is no music - meet some of our members:</p>
              <Musicians />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
