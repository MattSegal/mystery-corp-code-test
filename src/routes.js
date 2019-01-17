import HomeContainer from 'containers/home'
import WatchListContainer from 'containers/watch-list'
import FavouritesContainer from 'containers/favourites'

// Top level routes for React Router
const routes = [
  {
    name: 'Home',
    path: '/',
    RouteComponent: HomeContainer,
  },
  {
    name: 'Watch List',
    path: '/watch/',
    RouteComponent: WatchListContainer,
  },
  {
    name: 'Favourites',
    path: '/favourites/',
    RouteComponent: FavouritesContainer,
  },
]

export default routes
