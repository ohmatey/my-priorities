import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import { removePriorityById } from '../actions/'

export const MyPriority = ({ id, name, hours, removePriorityById }) => (
  <div className="card">
    <div className="card-content">
      <p className="title">{name}</p>
      <p className="subtitle">{hours} hrs</p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item" style={{ cursor: 'pointer' }} onClick={removePriorityById}>
        <span>
          Remove Priority
        </span>
      </p>
    </footer>
  </div>
)

MyPriority.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  hours: PropTypes.number,
  removePriorityById: PropTypes.func
}

const enhance = compose(
  connect(),
  withHandlers({
    removePriorityById: ({ dispatch, id }) => e => dispatch(removePriorityById(id))
  })
)

export default enhance(MyPriority)
