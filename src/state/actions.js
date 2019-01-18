import api from 'api'

export default {
  account: {
    login: sessionID => dispatch =>
      api.account
        .getID(sessionID)
        .then(accountID => dispatch({ type: 'LOGIN', sessionID, accountID })),
    getWatchlist: () => (dispatch, getState) => {
      const { auth } = getState()
      return api.account
        .getWatchlist(auth.sessionID, auth.accountID)
        .then(results => dispatch({ type: 'RECEIVE_WATCHLIST', results }))
    },
    getFavourites: () => (dispatch, getState) => {
      const { auth } = getState()
      return api.account
        .getFavourites(auth.sessionID, auth.accountID)
        .then(results => dispatch({ type: 'RECEIVE_FAVOURITES', results }))
    },
    addWatchlist: id => (dispatch, getState) => {
      const { auth } = getState()
      return api.account
        .setWatchlist(auth.sessionID, auth.accountID, id, true)
        .then(() => dispatch({ type: 'ADD_WATCHLIST', id }))
    },
    addFavourite: id => (dispatch, getState) => {
      const { auth } = getState()
      return api.account
        .setFavourite(auth.sessionID, auth.accountID, id, true)
        .then(() => dispatch({ type: 'ADD_FAVOURITE', id }))
    },
    removeWatchlist: id => (dispatch, getState) => {
      const { auth } = getState()
      return api.account
        .setWatchlist(auth.sessionID, auth.accountID, id, false)
        .then(() => dispatch({ type: 'REMOVE_WATCHLIST', id }))
    },
    removeFavourite: id => (dispatch, getState) => {
      const { auth } = getState()
      return api.account
        .setFavourite(auth.sessionID, auth.accountID, id, false)
        .then(() => dispatch({ type: 'REMOVE_FAVOURITE', id }))
    },
  },
  tv: {
    search: query => dispatch => {
      if (query.length < 2) {
        dispatch({ type: 'RECEIVE_SEARCH', results: [] })
      } else {
        api.tv
          .search(query)
          .then(results => dispatch({ type: 'RECEIVE_SEARCH', results }))
      }
    },
  },
}
