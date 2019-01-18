import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import debounce from 'utils/debounce'
import { actions } from 'state'
import SearchPage from 'components/search'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { query: '' }
    this.debouncedSearch = debounce(300)(this.onSearch)
  }

  componentDidMount() {
    // Clear search results
    this.onSearch()
    // Load watchlist / favourites
    this.props.getWatchlist()
    this.props.getFavourites()
  }

  onSearch = () => {
    const { query } = this.state
    this.props.search(query)
  }

  onChange = e => this.setState({ query: e.target.value }, this.debouncedSearch)

  render() {
    const { query } = this.state
    const { searched, shows, sessionID } = this.props
    if (!sessionID) {
      return <Redirect to="/login/" />
    }
    const searchedShows = shows.filter(s => searched.includes(s.id))
    return (
      <SearchPage
        results={searchedShows}
        query={query}
        onChange={this.onChange}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  sessionID: state.auth.sessionID,
  shows: state.data.shows,
  favourites: state.data.favourites,
  watchlist: state.data.watchlist,
  searched: state.data.searched,
})
const mapDispatchToProps = dispatch => ({
  search: query => dispatch(actions.tv.search(query)),
  getWatchlist: () => dispatch(actions.account.getWatchlist()),
  getFavourites: () => dispatch(actions.account.getFavourites()),
  addWatchlist: id => dispatch(actions.account.addWatchlist(id)),
  removeWatchlist: id => dispatch(actions.account.removeWatchlist(id)),
  addFavourite: id => dispatch(actions.account.addFavourite(id)),
  removeFavourite: id => dispatch(actions.account.removeFavourite(id)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
