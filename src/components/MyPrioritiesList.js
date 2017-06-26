import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MyPriority from './MyPriority'

export const MyPrioritiesList = ({ myPriorities }) => (
  <div>
    {myPriorities.map((myPriority, i) => <MyPriority key={i} {...myPriority} />)}
  </div>
)

MyPrioritiesList.propTypes = {
  myPriorities: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ myPriorities }) => ({
  myPriorities
})

export default connect(mapStateToProps)(MyPrioritiesList)
