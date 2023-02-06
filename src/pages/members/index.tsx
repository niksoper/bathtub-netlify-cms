import React from 'react'
import Layout from '../../components/Layout'
import { PrivacyPolicyLink } from '../../components/PrivacyPolicy'
import { CurrentTermDates, Spring2022TermDates, Summer2022TermDates, Autumn2022TermDates } from '../../components/TermDates'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <h1>Member information</h1>
            <CurrentTermDates />
            <Autumn2022TermDates />
            <Summer2022TermDates />
            <Spring2022TermDates />
            <PrivacyPolicyLink />
          </div>
        </section>
      </Layout>
    )
  }
}
