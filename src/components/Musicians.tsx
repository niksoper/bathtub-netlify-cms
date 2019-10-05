import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { MusiciansQueryQuery } from '../../types/graphql-types'
import { MusicianTemplateProps, MusicianImage } from '../templates/musician'

interface MusicianPreviewProps extends MusicianTemplateProps {
  slug: string
}

const MusicianPreview: React.SFC<MusicianPreviewProps> = ({ name, instrument, bio, image, slug }) => (
  <div>
    <Link to={slug}>
      <h1>{name}</h1>
      <h2>{instrument}</h2>
      <MusicianImage name={name} image={image} />
    </Link>
    <p>{bio}</p>
  </div>
)

class Musicians extends React.Component<{ data: MusiciansQueryQuery}> {
  render() {
    const { data } = this.props
    const { edges: musicians } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {musicians &&
          musicians.map(({ node }) => {
            const {name, instrument, bio, image, } = node.frontmatter
            return (
              <MusicianPreview
                key={node.id}
                slug={node.fields.slug}
                name={name}
                instrument={instrument}
                bio={bio}
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
          filter: { frontmatter: { templateKey: { eq: "musician" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                name
                templateKey
                instrument
                bio
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
        }
      }
    `}
    render={data => <Musicians data={data} />}
  />
)
