// Initial Redux state for the app
export default {
  // Authentication data
  auth: {
    // Session ID for a logged in MovieDB user
    sessionID: '',
    // Account ID for the logged in user
    accountID: '',
  },
  // Data from the moviedb backend
  data: {
    // All detailed show data, a list of objects
    shows: [],
    // Lists of shows, each list of integer IDs
    searched: [],
    favourites: [],
    watchlist: [],
  },
}
