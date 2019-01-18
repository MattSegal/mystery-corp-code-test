import React, { Component } from 'react'
import PropTypes from 'prop-types'

const WatchlistPage = ({ results, removeWatchlist }) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {results.length < 1 && (
          <tr>
            <th scope="row">No tv shows in your watchlist.</th>
          </tr>
        )}
        {results.map(show => (
          <tr key={show.id}>
            <th scope="row">{show.name}</th>
            <td onClick={() => removeWatchlist(show.id)}>remove watchlist</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
WatchlistPage.propTypes = {
  results: PropTypes.array.isRequired,
  removeWatchlist: PropTypes.func.isRequired,
}

export default WatchlistPage
