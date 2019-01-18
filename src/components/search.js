import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  FaPlus,
  FaTrashAlt,
  FaRegThumbsUp,
  FaRegThumbsDown,
} from 'react-icons/fa'

const SearchPage = ({
  results,
  watchlist,
  favourites,
  query,
  onChange,
  addWatchlist,
  removeWatchlist,
  addFavourite,
  removeFavourite,
}) => (
  <div>
    <input
      type="text"
      value={query}
      onChange={onChange}
      placeholder="Search for TV shows"
    />
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Watch List</th>
          <th scope="col">Like</th>
        </tr>
      </thead>
      <tbody>
        {results.length < 1 && (
          <tr>
            <th scope="row">No results found.</th>
          </tr>
        )}
        {results.map(show => (
          <tr key={show.id}>
            <th scope="row">{show.name}</th>
            {watchlist.includes(show.id) ? (
              <td onClick={() => removeWatchlist(show.id)}>
                <FaTrashAlt />
              </td>
            ) : (
              <td onClick={() => addWatchlist(show.id)}>
                <FaPlus />
              </td>
            )}
            {favourites.includes(show.id) ? (
              <td onClick={() => removeFavourite(show.id)}>
                <FaRegThumbsDown />
              </td>
            ) : (
              <td onClick={() => addFavourite(show.id)}>
                <FaRegThumbsUp />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
SearchPage.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array.isRequired,
  watchlist: PropTypes.array.isRequired,
  favourites: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  addWatchlist: PropTypes.func.isRequired,
  removeWatchlist: PropTypes.func.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
}

export default SearchPage
