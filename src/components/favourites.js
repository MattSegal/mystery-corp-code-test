import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaRegThumbsDown } from 'react-icons/fa'

import ShowDetails from 'components/show-details'

const FavouritesPage = ({ results, removeFavourite }) => (
  <div>
    <h2 className="mb-3">Favourites</h2>
    <div>
      {results.length < 1 && (
        <p>
          <strong>No TV shows in your favourites.</strong>
        </p>
      )}
      {results.map(show => (
        <ShowDetails key={show.id} {...show}>
          <span onClick={() => removeFavourite(show.id)}>
            <FaRegThumbsDown />
          </span>
        </ShowDetails>
      ))}
    </div>
  </div>
)
FavouritesPage.propTypes = {
  results: PropTypes.array.isRequired,
  removeFavourite: PropTypes.func.isRequired,
}

export default FavouritesPage
