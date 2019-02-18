import React from 'react'

export function ExternalLink({ children, title, href, className }) {
  return (
    <a className={className} target="_blank" rel="noopener noreferrer" href={href} title={title}>
      {children}
    </a>
  )
}
