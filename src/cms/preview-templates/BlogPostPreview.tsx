import React from 'react'
import { CmsPagePreview } from 'netlify-cms'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview: React.SFC<CmsPagePreview> = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default BlogPostPreview
