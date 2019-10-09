import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { Jumbotron } from '../components/Jumbotron'
import { IndexPageTemplateQuery } from '../../types/graphql-types'

export const IndexPageTemplate = ({ image, heading, description }: IndexPageTemplateQuery['markdownRemark']['frontmatter']) => (
  <div>
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
