import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { MusicianByIdQuery } from '../../types/graphql-types'

export interface MusicianTemplateProps {
  name: string
  instrument: string
  bio: string
  image: any
  helmet?: any
}

export const MusicianImage: React.SFC<{ image: any, name: string }> = ({name, image}) => {
  return image
    ? <img alt={`Photo of ${name}`} src={image.childImageSharp.fluid.src} />
    : <div>No image</div>
}

export const MusicianTemplate = ({
  name,
  instrument,
  bio,
  image,
  helmet,
}: MusicianTemplateProps) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{name}</h1>
            <h2>{instrument}</h2>
            <MusicianImage name={name} image={image} />
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface MusicianProps {
  data: MusicianByIdQuery
}

const Musician = ({ data }: MusicianProps) => {
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
        bio={musician}
      />
    </Layout>
  )
}

export default Musician

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
            fixed(width: 100, height:100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
