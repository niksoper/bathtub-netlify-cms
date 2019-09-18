import React, { ImgHTMLAttributes } from 'react'
import { FrontmatterImage, ISharpImage } from '../typings/markdown'

export interface SharpImageProps {
  alt: string
  image: FrontmatterImage
}

export const SharpImage = ({ alt, image }: SharpImageProps) => {
  const src = isSharpImage(image) ? image.childImageSharp.fluid.src : image

  return <img alt={alt} src={src} />
}

function isSharpImage(image: FrontmatterImage): image is ISharpImage {
  const sharpImage = image as ISharpImage
  return !!(sharpImage.childImageSharp && sharpImage.childImageSharp.fluid)
}
