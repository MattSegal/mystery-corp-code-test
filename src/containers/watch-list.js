import React, { Component } from 'react'

import api from 'api'

export default class WatchListContainer extends Component {

  componentDidMount() {
    console.log('make an api call!')
  }

  render() {
    return (
      <div>
        <p>watch</p>
      </div>
    )
  }
}
