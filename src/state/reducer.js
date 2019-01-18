// Helper functions for manipulating lists of objects by id
const isItemInList = (item, list) => list.map(el => el.id).includes(item.id)
const addItemToList = (item, list) => [...list, item]
const removeItemFromList = (item, list) => list.filter(el => el !== item)
const mergeLists = (oldList, newList) => {
  const newIds = newList.map(el => el.id)
  return [...newList, ...oldList.filter(el => !newIds.includes(el.id))]
}

// All possible changes to the Redux store's state
const reductions = {
  LOGIN: (state, action) => ({
    ...state,
    auth: {
      ...state.auth,
      sessionID: action.sessionID,
      accountID: action.accountID,
    },
  }),
  RECEIVE_SEARCH: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      shows: mergeLists(state.data.shows, action.results),
      searched: action.results.map(show => show.id),
    },
  }),
  RECEIVE_WATCHLIST: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      shows: mergeLists(state.data.shows, action.results),
      watchlist: action.results.map(show => show.id),
    },
  }),
  RECEIVE_FAVOURITES: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      shows: mergeLists(state.data.shows, action.results),
      favourites: action.results.map(show => show.id),
    },
  }),
  ADD_FAVOURITE: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      favourites: addItemToList(action.id, state.data.favourites),
    },
  }),
  ADD_WATCHLIST: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      watchlist: addItemToList(action.id, state.data.watchlist),
    },
  }),
  REMOVE_FAVOURITE: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      favourites: removeItemFromList(action.id, state.data.favourites),
    },
  }),
  REMOVE_WATCHLIST: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      watchlist: removeItemFromList(action.id, state.data.watchlist),
    },
  }),
}

// The final reducer function, which we pass to Redux.
export default (state, action) => {
  const func = reductions[action.type]
  if (!func) return { ...state }
  return func(state, action)
}
