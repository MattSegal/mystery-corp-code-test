import React, { Component } from 'react'

import api from 'api'
import debounce from 'utils/debounce'

export default class HomeContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: [],
    }
    this.search = debounce(300)(this.onSearch)
  }

  onSearch = () => {
    const { query } = this.state
    if (query.length > 1) {
      api.search(this.state.query)
        .then(results => this.setState({ results: results }))
    } else {
      this.setState({ results: [] })
    }
  }

  onChange = e =>
    this.setState({ query: e.target.value }, this.search)

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
          placeholder="Search for TV shows"
        />
        <div>
          {this.state.results.map((show) => console.warn(show) || (
            <div key={show.id}>
              {show.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
