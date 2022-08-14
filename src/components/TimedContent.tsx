import moment, { Moment } from 'moment'
import React from 'react'

export interface TimedContentProps {
  hideAfter: Moment
}

export const isAfterToday = (date: moment.Moment) => {
  const today = moment().startOf('day')
  return today.isAfter(date)
}

export const TimedContent: React.FunctionComponent<TimedContentProps> = ({ children, hideAfter }) => {
  const shouldHide = React.useMemo(() => isAfterToday(hideAfter), [hideAfter])

  if (shouldHide) {
    return null
  }

  return (
    <div>
      {children}
    </div>
  )
}
