import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'
import { CmsPagePreview } from 'netlify-cms'

const AboutPagePreview: React.SFC<CmsPagePreview> = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default AboutPagePreview
