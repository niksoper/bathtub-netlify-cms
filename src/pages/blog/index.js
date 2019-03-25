import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Jumbotron } from '../../components/Jumbotron'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>BathTub Blog</h1>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
