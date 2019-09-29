import React from 'react'

export interface MusicianProps {
  name: string
  instrument: string
}

export const Musician: React.SFC<MusicianProps> = (props) => (
  <p>{`My name is ${props.name} and I play the ${props.instrument}.`}</p>
)
