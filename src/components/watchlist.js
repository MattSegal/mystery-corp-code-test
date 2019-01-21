import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaTrashAlt } from 'react-icons/fa'

import ShowDetails from 'components/show-details'

const WatchlistPage = ({ results, removeWatchlist }) => (
  <div>
    <h2 className="mb-3">Watch List</h2>
    <div>
      {results.length < 1 && (
        <p>
          <strong>No TV shows in your watchlist.</strong>
        </p>
      )}
      {results.map(show => (
        <ShowDetails key={show.id} {...show}>
          <span onClick={() => removeWatchlist(show.id)}>
            <FaTrashAlt />
          </span>
        </ShowDetails>
      ))}
    </div>
  </div>
)
WatchlistPage.propTypes = {
  results: PropTypes.array.isRequired,
  removeWatchlist: PropTypes.func.isRequired,
}

export default WatchlistPage
