import React from 'react'
import PropTypes from 'prop-types'

export interface MusicianProps {
  name: string
  instrument: string
}

export const Musician = (props: MusicianProps) => (
  <p>{`My name is ${props.name} and I play the ${props.instrument}.`}</p>
)
