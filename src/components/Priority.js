import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import { addPriorityById } from '../actions/'

export const Priority = ({ id, name, hours, addPriorityById }) => (
  <div className="card">
    <div className="card-content">
      <p className="title">{name}</p>
      <p className="subtitle">{hours} hrs</p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item" style={{ cursor: 'pointer' }} onClick={addPriorityById}>
        <span>
          Add Priority
        </span>
      </p>
    </footer>
  </div>
)

Priority.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  hours: PropTypes.number,
  addPriorityById: PropTypes.func
}

const enhance = compose(
  connect(),
  withHandlers({
    addPriorityById: ({ dispatch, id }) => e => dispatch(addPriorityById(id))
  })
)

export default enhance(Priority)
