import React from 'react'
import PropTypes from 'prop-types'
import { compose, withPropsOnChange } from 'recompose'
import { connect } from 'react-redux'

import getTotalPriorityHours from './utils/getTotalPriorityHours'

export const MyPrioritiesStats = ({ totalHours, tallyOfPriorities, timeLeftInDay }) => (
  <div className="box">
    <p>Total hours of priorities: {totalHours}</p>
    <p>Tally of priorities: {tallyOfPriorities}</p>
    <p>Time left in the day: {timeLeftInDay}</p>
  </div>
)

MyPrioritiesStats.propTypes = {
  totalHours: PropTypes.number,
  tallyOfPriorities: PropTypes.number,
  timeLeftInDay: PropTypes.number
}

const mapStateToProps = ({ myPriorities }) => ({
  myPriorities
})

const enhance = compose(
  connect(mapStateToProps),
  withPropsOnChange(
    ['myPriorities'],
    ({ myPriorities }) => {
      const totalHours = getTotalPriorityHours(myPriorities)
      const timeLeftInDay = 24 - totalHours
      const tallyOfPriorities = myPriorities.length

      return {
        totalHours,
        tallyOfPriorities,
        timeLeftInDay
      }
    }
  )
)

export default enhance(MyPrioritiesStats)
