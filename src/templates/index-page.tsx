import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import { Jumbotron } from '../components/Jumbotron'
import ChristmasPanel from '../components/Christmas'

import { IndexPageTemplateQuery } from '../../types/graphql-types'
import Helmet from 'react-helmet'
import { ConcertDates, ConcertProps, getConcertDate } from '../components/Concert'
import { isAfterToday, TimedContent } from '../components/TimedContent'
import NextConcert from '../components/NextConcert'

export const IndexPageTemplate = ({
  image,
  heading,
  description,
}: IndexPageTemplateQuery['markdownRemark']['frontmatter']) => {

  const concerts = React.useMemo<ConcertProps[]>(() => {
    const concertsData: ConcertProps[] = [
      {
        date: moment('2023-05-12'),
        location: 'Bath Party in the City',
      },
      {
        date: moment('2023-06-10'),
        location: 'Bath Fringe Festival',
      },
      {
        date: moment('2023-07-08'),
        location: 'Bath Carnival',
      },
    ]

    return concertsData
      .filter(concert => !isAfterToday(getConcertDate(concert)))
      .sort((a, b) => getConcertDate(a).valueOf() - getConcertDate(b).valueOf())
  }, [])

  return (
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
              <TimedContent hideAfter={moment('2023-03-25')}>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Our next performance</h3>
                  <NextConcert />
                </div>
              </TimedContent>
              {concerts.length === 0 ? null :
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Upcoming concerts</h3>
                  <ConcertDates concerts={concerts} />
                </div>
              }
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
  }

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
