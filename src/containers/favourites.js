import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { actions } from 'state'
import FavouritesPage from 'components/favourites'

class FavouritesContainer extends Component {
  componentDidMount() {
    // Load watchlist / favourites
    this.props.getWatchlist()
    this.props.getFavourites()
  }

  render() {
    const { favourites, shows, sessionID } = this.props
    if (!sessionID) {
      return <Redirect to="/login/" />
    }
    const favouritesShows = shows.filter(s => favourites.includes(s.id))
    return <FavouritesPage results={favouritesShows} {...this.props} />
  }
}

const mapStateToProps = state => ({
  sessionID: state.auth.sessionID,
  shows: state.data.shows,
  favourites: state.data.favourites,
})
const mapDispatchToProps = dispatch => ({
  getWatchlist: () => dispatch(actions.account.getWatchlist()),
  getFavourites: () => dispatch(actions.account.getFavourites()),
  removeFavourite: id => dispatch(actions.account.removeFavourite(id)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouritesContainer)
