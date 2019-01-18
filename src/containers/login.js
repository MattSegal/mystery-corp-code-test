import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import api from 'api'
import { actions } from 'state'

const AUTH_URL = 'https://www.themoviedb.org/authenticate/'

class LoginContainer extends Component {
  componentDidMount() {
    // This is a little hacky.
    if (window.location.hash.includes('?')) {
      // Generate a sessionID using the request token.
      const queryString = window.location.hash.split('?')[1]
      const urlParams = new URLSearchParams(queryString)
      const approvedToken = urlParams.get('request_token')
      api.auth
        .createSession(approvedToken)
        .then(sessionID => this.props.login(sessionID))
    } else {
      // Get the user to approve access to the API
      api.auth.getToken().then(this.onReceiveToken)
    }
  }

  onReceiveToken = token => {
    const redirect = encodeURIComponent(window.location.href)
    const url = `${AUTH_URL}${token}?redirect_to=${redirect}`
    window.location.href = url
  }

  render() {
    const { sessionID, accountID } = this.props
    if (sessionID && accountID) {
      return <Redirect to="/" />
    }
    return <div>logging you in...</div>
  }
}

const mapStateToProps = state => ({
  sessionID: state.auth.sessionID,
  accountID: state.auth.accountID,
})
const mapDispatchToProps = dispatch => ({
  login: sessionID => dispatch(actions.account.login(sessionID)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
