import React from 'react'
import Layout from '../../components/Layout'
import { CurrentTermDates, TermMonth } from '../../components/TermDates'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <CurrentTermDates />
      </Layout>
    )
  }
}
