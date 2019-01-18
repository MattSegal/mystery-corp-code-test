import HomeContainer from 'containers/home'
import WatchListContainer from 'containers/watch-list'
import FavouritesContainer from 'containers/favourites'
import LoginContainer from 'containers/login'

// Top level routes for React Router
const routes = [
  {
    name: 'Home',
    path: '/',
    RouteComponent: HomeContainer,
    header: true,
  },
  {
    name: 'Login',
    path: '/login/',
    RouteComponent: LoginContainer,
    header: false,
  },
  {
    name: 'Watch List',
    path: '/watch/',
    RouteComponent: WatchListContainer,
    header: true,
  },
  {
    name: 'Favourites',
    path: '/favourites/',
    RouteComponent: FavouritesContainer,
    header: true,
  },
]

export default routes
