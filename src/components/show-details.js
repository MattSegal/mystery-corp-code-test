import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const ShowDetails = ({ name, first_air_date, overview, children }) => (
  <div className="mb-5">
    <span className="mr-3">
      <strong>
        {name}
        {first_air_date && ` (${moment(first_air_date).year()})`}
      </strong>
    </span>
    <span>{children}</span>
    <div className="mt-2">{overview}</div>
  </div>
)
ShowDetails.propTypes = {
  name: PropTypes.string.isRequired,
  first_air_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.object,
}

export default ShowDetails
