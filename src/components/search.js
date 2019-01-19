import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  FaPlus,
  FaTrashAlt,
  FaRegThumbsUp,
  FaRegThumbsDown,
} from 'react-icons/fa'

import lang from 'utils/lang'
import ShowPoster from 'components/show-poster'
import styles from 'styles/search.module.scss'

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
      className={styles.search}
      placeholder="Search for TV shows"
    />
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Cover</th>
          <th scope="col">Name</th>
          <th scope="col">Year</th>
          <th scope="col">Rating</th>
          <th scope="col">Language</th>
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
            <th scope="row">
              <ShowPoster path={show.poster_path} />
            </th>
            <td>{show.name}</td>
            <td>
              {show.first_air_date ? moment(show.first_air_date).year() : '-'}
            </td>
            <td>
              {show.vote_count > 0
                ? `${Math.round(show.vote_average * 10)}%`
                : '-'}
            </td>
            <td>
              {show.original_language ? lang(show.original_language) : ''}
            </td>
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
