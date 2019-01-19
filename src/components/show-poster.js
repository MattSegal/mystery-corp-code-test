import React, { Component } from 'react'
import PropTypes from 'prop-types'

const BASE_URL = 'http://image.tmdb.org/t/p/w45'
const url = path =>
  path ? (BASE_URL + path) : './public/white.png'


const ShowPoster = ({ path }) => (
  <img
    style={{ objectFit: 'contain' }}
    src={url(path)}
    width="45"
    height="45"
  />
)
ShowPoster.propTypes = {
  path: PropTypes.string,
}

export default ShowPoster
