import React from 'react'
import Layout from '../../components/Layout'
import { CurrentTermDates, TermMonth } from '../../components/TermDates'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <CurrentTermDates />
          </div>
        </section>
      </Layout>
    )
  }
}
