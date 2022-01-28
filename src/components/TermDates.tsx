import React from 'react'

import './TermDates.scss'

export interface TermMonth {
  month: string
  rehearsals: number[]
  breaks?: number[]
}

interface Props {
  termName: string
  months: TermMonth[]
}

const TermDates: React.SFC<Props> = ({ termName, months }) => (
  <section className="section">
    <div className="container">
      <div className="content term-dates">
        <h1>{`Term Dates: ${termName}`}</h1>
        <ul>
          {months.map(({ month, rehearsals, breaks }) => {
            const monthRehearsals = `${rehearsals.join(', ')}`
            const monthBreaks = breaks ? ` (break on ${breaks.join(', ')})` : ''

            return (
              <li>
                <span className="term-month">{`${month}: `}</span>
                {`${monthRehearsals}${monthBreaks}`}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </section>
)

export default TermDates
