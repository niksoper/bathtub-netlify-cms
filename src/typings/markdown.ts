export interface IPage<T> {
  data: {
    markdownRemark: {
      html?: string
      frontmatter: T
    }
  }
}

export interface ISharpImage {
  childImageSharp: { fluid: { src: string } }
}

export type FrontmatterImage = ISharpImage | string
