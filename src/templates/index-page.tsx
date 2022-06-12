import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { Jumbotron } from '../components/Jumbotron'

import { IndexPageTemplateQuery } from '../../types/graphql-types'
import Helmet from 'react-helmet'
import NextConcert from '../components/NextConcert'
import { ExternalLink } from '../components/ExternalLink'
import { TimedContent } from '../components/TimedContent'

export const IndexPageTemplate = ({
  image,
  heading,
  description,
}: IndexPageTemplateQuery['markdownRemark']['frontmatter']) => (
  <div>
    <Helmet>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
    </Helmet>
    <Jumbotron>
      <img alt="BathTub Orchestra logo" src={image.childImageSharp.fluid.src} />
    </Jumbotron>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-centered has-text-weight-semibold is-size-2">{heading}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <TimedContent hideAfter={moment('2022-07-09')}>
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">Our next performance</h3>
                <p style={{ fontSize: '1.5em' }}>We'll be part of the procession at Bath Carnival on Saturday 9th July. It will be a new experience for the orchestra so we're expecting some chaos but a lot of fun, so look out for us roaming the streets of Bath between 15:00 and 17:30.</p>
                <p style={{ fontSize: '1.5em', marginTop: '1em' }}>See <ExternalLink href="https://www.bathcarnival.co.uk/">bathcarnival.co.uk</ExternalLink> for more information.</p>
              </div>
            </TimedContent>
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
              <BlogRoll />
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/blog">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

interface IndexPageProps {
  data: IndexPageTemplateQuery
}

const IndexPage = ({ data }: IndexPageProps) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
      }
    }
  }
`
