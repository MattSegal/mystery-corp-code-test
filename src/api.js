const BASE_URL = 'https://api.themoviedb.org/3'

// You typically wouldn't hard-code this in the front-end.
const API_KEY = '46c68f9d5bac5ba8d40cb0b835172796'

// Builds URL string for API
const url = (path, qs) => {
  const qsWithKey = { ...qs, api_key: API_KEY }
  const querystring = Object.keys(qsWithKey)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(qsWithKey[k])}`)
    .join('&')
  return `${BASE_URL}${path}?${querystring}`
}

// URLs used by API calls.
const urls = {
  newToken: () => url('/authentication/token/new', {}),
  newSession: () => url('/authentication/session/new', {}),
  accountDetails: sessionID => url('/account', { session_id: sessionID }),
  TVWatchlist: (sessionID, accountID) =>
    url(`/account/${accountID}/watchlist/tv`, { session_id: sessionID }),
  watchlist: (sessionID, accountID) =>
    url(`/account/${accountID}/watchlist`, { session_id: sessionID }),
  TVFavourite: (sessionID, accountID) =>
    url(`/account/${accountID}/favorite/tv`, { session_id: sessionID }),
  favourite: (sessionID, accountID) =>
    url(`/account/${accountID}/favorite`, { session_id: sessionID }),
  search: query => url('/search/tv', { query }),
  details: id => url(`/tv/${id}`, {}),
}

// GET JSON API
const get = url => fetch(url).then(r => r.json())

// POST JSON API
const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(r => r.json())

// All API calls made by the front-end.
const api = {
  auth: {
    getToken: () => get(urls.newToken()).then(r => r.request_token),
    createSession: token =>
      post(urls.newSession(), { request_token: token }).then(r => r.session_id),
  },
  account: {
    getID: sessionID => get(urls.accountDetails(sessionID)).then(r => r.id),
    getWatchlist: (sessionID, accountID) =>
      get(urls.TVWatchlist(sessionID, accountID)).then(r => r.results),
    getFavourites: (sessionID, accountID) =>
      get(urls.TVFavourite(sessionID, accountID)).then(r => r.results),
    setWatchlist: (sessionID, accountID, mediaID, isPresent) =>
      post(urls.watchlist(sessionID, accountID), {
        media_type: 'tv',
        media_id: mediaID,
        watchlist: isPresent,
      }),
    setFavourite: (sessionID, accountID, mediaID, isPresent) =>
      post(urls.favourite(sessionID, accountID), {
        media_type: 'tv',
        media_id: mediaID,
        favorite: isPresent,
      }),
  },
  tv: {
    search: query => get(urls.search(query)).then(r => r.results || []),
    details: mediaID => get(urls.details(mediaID)),
  },
}

export default api
