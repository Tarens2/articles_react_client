import React from 'react';
import * as ReactDom from 'react-dom';
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';

import {applyMiddleware, createStore} from 'redux';
import {Provider}from 'react-redux';
import thunk from 'redux-thunk';

import App from './pages/App';
import Navigation from './components/Navigation';
import SingUp from './pages/SingupPage';

let app = document.getElementById('app');

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

ReactDom.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()} >
            <div className="container">
                <Route path="/" component={Navigation} />
                <Route exact path="/" component={App} />
                <Route path="/singup" component={SingUp} />
            </div>
        </Router>
    </Provider>
, app);
