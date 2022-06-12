import moment, { Moment } from 'moment'
import React from 'react'

export interface TimedContentProps {
  hideAfter: Moment
}

export const TimedContent: React.FunctionComponent<TimedContentProps> = ({ children, hideAfter }) => {
  const shouldHide = React.useMemo(() => {
    const today = moment().startOf('day')
    return today.isAfter(hideAfter)
  }, [hideAfter])

  if (shouldHide) {
    return null
  }

  return (
    <div>
      {children}
    </div>
  )
}
