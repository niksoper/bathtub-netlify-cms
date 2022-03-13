import React from 'react'
import Layout from '../../components/Layout'
import { PrivacyPolicyLink } from '../../components/PrivacyPolicy'
import { CurrentTermDates, TermMonth } from '../../components/TermDates'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1>Member information</h1>
            <CurrentTermDates />
            <PrivacyPolicyLink />
          </div>
        </section>
      </Layout>
    )
  }
}
