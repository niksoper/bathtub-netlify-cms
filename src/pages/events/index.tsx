import React from 'react'
import Layout from '../../components/Layout'
import TermDates, { TermMonth } from '../../components/TermDates'

export default class Index extends React.Component {
  render() {
    const termName = 'Spring 2022'
    // const months = ['11, 18, 25 January', '1, 8, 15 February (break on 22)', '1, 8, 15, 22, 29 March']
    const months: TermMonth[] = [
      {
        month: 'January',
        rehearsals: [11, 18, 25],
      },
      {
        month: 'February',
        rehearsals: [1, 8, 15],
        breaks: [22],
      },
      {
        month: 'March',
        rehearsals: [1, 8, 15, 22, 29],
      },
    ]

    return (
      <Layout>
        <TermDates termName={termName} months={months} />
      </Layout>
    )
  }
}
