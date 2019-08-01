import React from 'react'
import GoogleCalendar from '../../components/GoogleCalendar'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <GoogleCalendar />
      </Layout>
    )
  }
}
