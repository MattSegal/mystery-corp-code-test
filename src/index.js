import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'state'
import routes from 'routes'
import Header from 'components/header'
import ErrorBoundary from 'components/generic/error-boundary'

import 'styles/main.global.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Header />
            <div className="container">
              <div className="row">
                <div className="col">
                  <Switch>
                    {routes.map(({ path, RouteComponent }) => (
                      <Route exact={true} key={path} path={path}>
                        <ErrorBoundary>
                          <RouteComponent />
                        </ErrorBoundary>
                      </Route>
                    ))}
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
