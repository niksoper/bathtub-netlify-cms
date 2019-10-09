import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { MusiciansQueryQuery } from '../../types/graphql-types'
import { Musician } from './Musician'

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
              <Musician
                key={node.id}
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
          sort: {fields: [frontmatter___name, frontmatter___instrument]},
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
