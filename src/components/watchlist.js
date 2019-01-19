import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FaTrashAlt } from 'react-icons/fa'

const WatchlistPage = ({ results, removeWatchlist }) => (
  <div>
    <h2 className="mb-3">Watch List</h2>
    <div>
      {results.length < 1 && (
        <p><strong>No TV shows in your watchlist.</strong></p>
      )}
      {results.map(show => (
        <div key={show.id} className="mb-2">
          <span className="mr-3">
            {show.name}
            {show.first_air_date && ` (${moment(show.first_air_date).year()})`}
          </span>
          <span
            onClick={() => removeWatchlist(show.id)}
          >
            <FaTrashAlt />
          </span>
        </div>
      ))}
    </div>
  </div>
)
WatchlistPage.propTypes = {
  results: PropTypes.array.isRequired,
  removeWatchlist: PropTypes.func.isRequired,
}

export default WatchlistPage
