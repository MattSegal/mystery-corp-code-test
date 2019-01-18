import React, { Component } from 'react'
import PropTypes from 'prop-types'

const FavouritesPage = ({ results, removeFavourite }) => (
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
            <th scope="row">No tv shows in favourites.</th>
          </tr>
        )}
        {results.map(show => (
          <tr key={show.id}>
            <th scope="row">{show.name}</th>
            <td onClick={() => removeFavourite(show.id)}>remove favourite</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
FavouritesPage.propTypes = {
  results: PropTypes.array.isRequired,
  removeFavourite: PropTypes.func.isRequired,
}

export default FavouritesPage
