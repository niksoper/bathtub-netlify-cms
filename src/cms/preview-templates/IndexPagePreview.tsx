import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { IndexPageTemplateQuery } from '../../../types/graphql-types'
import { CmsPagePreview } from 'netlify-cms'

const IndexPagePreview: React.SFC<CmsPagePreview> = ({ entry }) => {
  return (
    <IndexPageTemplate
      image={entry.getIn<IndexPageTemplateQuery['markdownRemark']['frontmatter']['image']>(['data', 'image'])}
      heading={entry.getIn<string>(['data', 'heading'])}
      description={entry.getIn<string>(['data', 'description'])}
    />
  )
}

export default IndexPagePreview
