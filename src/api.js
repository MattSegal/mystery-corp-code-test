const BASE_URL = 'https://api.themoviedb.org/3'

// You typically wouldn't hard-code this stuff.
const ACCOUNT_ID = '8229489'
const API_KEY = '46c68f9d5bac5ba8d40cb0b835172796'

// URLs used by API calls.
const urls = {
  newToken: () => `${BASE_URL}/authentication/token/new?api_key=${API_KEY}`,
  search: query => `${BASE_URL}/search/tv?api_key=${API_KEY}`,
  query: id => `${BASE_URL}/tv/${id}?api_key=${API_KEY}`,
}

// All API calls made by the front-end.
const api = {
  search: query =>
    fetch(urls.search(query))
      .then(r => r.json())
      .then(r => r.results || []),
  details: id =>
      fetch(urls.details(id))
      .then(r => r.json()),
}

export default api
