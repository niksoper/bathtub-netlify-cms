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
            </div>
            <Musicians />
          </div>
        </section>
      </Layout>
    )
  }
}
