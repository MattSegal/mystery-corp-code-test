import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import routes from 'routes'

const isCurrentRoute = path =>
  location.hash.split('/')[1] === path.replace('/', '')

const Header = () => (
  <nav className="navbar navbar-expand navbar-light bg-light mb-3">
    <a className="navbar-brand" href="/">
      My TV Shows
    </a>
    <ul className="navbar-nav ml-auto">
      {routes
        .filter(r => r.header)
        .map(({ path, name }) => (
          <li
            key={path}
            className={`nav-item ${isCurrentRoute(path) && 'active'}`}
          >
            <Link className="nav-link" to={path}>
              {name}
            </Link>
          </li>
        ))}
    </ul>
  </nav>
)

export default Header
