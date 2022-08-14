import React from 'react'
import Layout from '../../components/Layout'
import { FeaturedConcert } from '../../components/Concert';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Tickets</h1>
              <FeaturedConcert
                name="Christmas concert with Priordonnas"
                location="Salvation Army, Green Park Road, Bath BA1 1XE"
                date="4th Dec 2019"
                time="19:30"
                description="A christmas concert featuring traditional carols, modern classics and a few surprises! BathTub Orchestra will be joined by special guests - Priordonnas - a ladies choir formed at Paragon school in Bath."
              />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
