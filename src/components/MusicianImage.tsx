import React from 'react'

export const MusicianImage: React.SFC<{ image: any, name: string }> = ({name, image}) => {
  return image && image.childImageSharp && image.childImageSharp.fluid && image.childImageSharp.fluid.src
    ? <img alt={`Photo of ${name}`} src={image.childImageSharp.fluid.src} />
    : null
}