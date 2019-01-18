import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { actions } from 'state'
import WatchlistPage from 'components/watchlist'

class WatchlistContainer extends Component {
  componentDidMount() {
    // Load watchlist / favourites
    this.props.getWatchlist()
    this.props.getFavourites()
  }

  render() {
    const { watchlist, shows, sessionID } = this.props
    if (!sessionID) {
      return <Redirect to="/login/" />
    }
    const watchlistShows = shows.filter(s => watchlist.includes(s.id))
    return <WatchlistPage results={watchlistShows} {...this.props} />
  }
}

const mapStateToProps = state => ({
  sessionID: state.auth.sessionID,
  shows: state.data.shows,
  watchlist: state.data.watchlist,
})
const mapDispatchToProps = dispatch => ({
  getWatchlist: () => dispatch(actions.account.getWatchlist()),
  getFavourites: () => dispatch(actions.account.getFavourites()),
  removeWatchlist: id => dispatch(actions.account.removeWatchlist(id)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchlistContainer)
