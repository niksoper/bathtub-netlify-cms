import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { MusiciansQueryQuery } from '../../types/graphql-types'
import { MusicianTemplateProps, MusicianImage } from '../templates/musician'

import './Musicians.scss'
import { HTMLContent } from './Content'

interface MusicianPreviewProps extends MusicianTemplateProps {
  slug: string
}

const MusicianPreview: React.SFC<MusicianPreviewProps> = ({ name, instrument, bio, image, slug }) => (
  <div className="musician box notification">
    <h1>{`${name}: ${instrument}`}</h1>
    <div className="info">
      <div className="photo">
        <MusicianImage name={name} image={image} />
      </div>
      <blockquote>
        <HTMLContent className="bio" content={bio} />
      </blockquote>
    </div>
  </div>
)

class Musicians extends React.Component<{ data: MusiciansQueryQuery}> {
  render() {
    const { data } = this.props
    const { edges: musicians } = data.allMarkdownRemark

    return (
      <div className="musicians">
        {musicians &&
          musicians.map(({ node }) => {
            const {name, instrument, image, } = node.frontmatter
            return (
              <MusicianPreview
                key={node.id}
                slug={node.fields.slug}
                name={name}
                instrument={instrument}
                bio={node.html}
                image={image}
                />
              )
          })}
      </div>
    )
  }
}

// TODO: sorting
export default () => (
  <StaticQuery
    query={graphql`
      query MusiciansQuery {
        allMarkdownRemark(
          sort: {fields: [frontmatter___instrument, frontmatter___name]},
          filter: { frontmatter: { templateKey: { eq: "musician" } } }
        ) {
          edges {
            node {
              id
              html
              fields {
                slug
              }
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
        }
      }
    `}
    render={data => <Musicians data={data} />}
  />
)
