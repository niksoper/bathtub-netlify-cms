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
  <div className="content term-dates-wrapper">
    <h2>{`Term Dates: ${termName}`}</h2>
    <ul className="box notification term-dates">
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
)

export const CurrentTermDates = () => {
  const termName = 'Winter 2023'
  const months: TermMonth[] = [
    {
      month: 'January',
      rehearsals: [10, 17, 24, 31],
    },
    {
      month: 'February',
      rehearsals: [7, 21, 28],
      breaks: [14]
    },
    {
      month: 'March',
      rehearsals: [7, 14, 21, 28],
    },
  ]

  return <TermDates termName={termName} months={months} />
}

export const Autumn2022TermDates = () => {
  const termName = 'Autumn 2022'
  const months: TermMonth[] = [
    {
      month: 'September',
      rehearsals: [6, 13, 20, 27],
    },
    {
      month: 'October',
      rehearsals: [4, 11, 18],
      breaks: [25],
    },
    {
      month: 'November',
      rehearsals: [1, 8, 15, 22],
      breaks: [29],
    },
    {
      month: 'December',
      rehearsals: [6],
    },
  ]

  return <TermDates termName={termName} months={months} />
}

export const Summer2022TermDates = () => {
  const termName = 'Summer 2022'
  const months: TermMonth[] = [
    {
      month: 'April',
      rehearsals: [26],
    },
    {
      month: 'May',
      rehearsals: [3, 10, 17, 24, 31],
    },
    {
      month: 'June',
      rehearsals: [7, 14, 21, 28],
    },
    {
      month: 'July',
      rehearsals: [5],
    },
  ]

  return <TermDates termName={termName} months={months} />
}

export const Spring2022TermDates = () => {
  const termName = 'Spring 2022'
  const months: TermMonth[] = [
    {
      month: 'January',
      rehearsals: [11, 18, 25],
    },
    {
      month: 'February',
      rehearsals: [1, 8, 15],
      breaks: [22],
    },
    {
      month: 'March',
      rehearsals: [1, 8, 15, 22, 29],
    },
    {
      month: 'April',
      rehearsals: [5],
    }
  ]

  return <TermDates termName={termName} months={months} />
}

export default TermDates
