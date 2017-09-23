import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
// import { BrowserRouter, Switch, Router } from 'react-router-dom'
// import DevTools from './DevTools'
import routes from './Navigation/routes'
import configureStore from './Store/Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import Router from './Navigation/routes'
import PushnotificationConfig from './Containers/PushnotificationConfig';
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      active: false,
      store: configureStore(history, () => this.setState({isLoading: false})),
    };
  }


  render() {
    if (this.state.isLoading) return <div></div>;
    return (
      <Provider store={this.state.store}>
        <ConnectedRouter history={history}>
        <Router />
        </ConnectedRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
}
