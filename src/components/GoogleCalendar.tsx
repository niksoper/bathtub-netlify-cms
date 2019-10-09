import React from 'react'

const GoogleCalendar: React.SFC<{}> = () => (
  <iframe
    title="Google calendar"
    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=c2RpdTg4cmZpaHNhaDA0dW1mbnQ1ZGw3N29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26&amp;showNav=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;showDate=1&amp;showTitle=0&amp;title"
    style={{ borderWidth: 0 }}
    width="800"
    height="600"
    scrolling="no"
  />
)

export default GoogleCalendar
