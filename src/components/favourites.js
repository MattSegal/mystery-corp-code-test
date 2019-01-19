import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FaRegThumbsDown } from 'react-icons/fa'

const FavouritesPage = ({ results, removeFavourite }) => (
  <div>
    <h2 className="mb-3">Favourites</h2>
    <div>
      {results.length < 1 && (
        <p><strong>No TV shows in your favourites.</strong></p>
      )}
      {results.map(show => (
        <div key={show.id} className="mb-2">
          <span className="mr-3">
            {show.name}
            {show.first_air_date && ` (${moment(show.first_air_date).year()})`}
          </span>
          <span
            onClick={() => removeFavourite(show.id)}
          >
            <FaRegThumbsDown />
          </span>
        </div>
      ))}
    </div>
  </div>
)
FavouritesPage.propTypes = {
  results: PropTypes.array.isRequired,
  removeFavourite: PropTypes.func.isRequired,
}

export default FavouritesPage
