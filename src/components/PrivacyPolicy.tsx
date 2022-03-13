import React from 'react'

import { ExternalLink } from './ExternalLink'

import './PrivacyPolicy.scss'

export const PrivacyPolicyLink = () => (
  <div className="privacy-policy-wrapper">
    We need to store some of your personal information to help run the orchestra. See our
    <span className="privacy-policy-link">
      <ExternalLink href="https://drive.google.com/file/d/1tJ2iYgZZ-srAsIkDfH76fkseIGXsfMnR/view?usp=sharing">
        Privacy Policy
      </ExternalLink>
    </span>
    for more detail.
  </div>
)
