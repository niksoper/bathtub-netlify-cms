import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { MusicianByIdQuery } from '../../types/graphql-types'
import { MusicianProps, Musician } from '../components/Musician'

export interface MusicianTemplateProps extends MusicianProps {
  helmet?: any
}

export const MusicianTemplate: React.SFC<MusicianTemplateProps> = ({
  helmet,
  name,
  instrument,
  bio,
  image
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <Musician
          name={name}
          instrument={instrument}
          bio={bio}
          image={image}  
        />
      </div>
    </section>
  )
}

interface MusicianPageProps {
  data: MusicianByIdQuery
}

const MusicianPage = ({ data }: MusicianPageProps) => {
  const { markdownRemark: musician } = data

  return (
    <Layout>
      <MusicianTemplate
        helmet={
          <Helmet titleTemplate="%s | Musician">
            <title>{`${musician.frontmatter.name}`}</title>
            <meta name="description" content={`${musician.frontmatter.bio}`} />
          </Helmet>
        }
        name={musician.frontmatter.name}
        instrument={musician.frontmatter.instrument}
        image={musician.frontmatter.image}
        bio={musician.html}
      />
    </Layout>
  )
}

export default MusicianPage

export const pageQuery = graphql`
  query MusicianByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        templateKey
        instrument
        image {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
