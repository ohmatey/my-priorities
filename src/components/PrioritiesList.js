import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Priority from './Priority'

export const PrioritiesList = ({ priorities }) => (
  <div>
    {priorities.map((priority, i) => <Priority key={i} {...priority} />)}
  </div>
)

Priority.propTypes = {
  priorities: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ priorities }) => ({
  priorities
})

export default connect(mapStateToProps)(PrioritiesList)
