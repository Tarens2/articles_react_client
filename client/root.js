import React from 'react';
import {connect}  from "react-redux";
import {userSingInFromStorage} from './actions/user';
import {Route} from 'react-router';
import {createBrowserHistory} from 'history';
import {BrowserRouter, Switch} from "react-router-dom";

import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider}from 'react-redux';
import thunk from 'redux-thunk';

import CreateArticlePage from './pages/CreateArticlePage/CreateArticlePage';
import App from './pages/App';
import Navigation  from './components/Navigation';
import SingUp from './pages/SingupPage';
import SingIn from './pages/SinginPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/profilePage/ProfilePage';
import NotFound from './pages/NotFound';
import ArticlePage from './pages/ArticlePage';
import ArticleChartPage from './pages/ArticleChartPage/ArticleChartPage';

import reducer from './reducers';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
});

let browserHistory = createBrowserHistory();

class Root extends React.Component {
    render() {
        return <Provider store={store}>
            <BrowserRouter history={browserHistory}>
                <div>
                    <Route path="/" component={Navigation}/>
                    <div className="container">
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/singup" component={SingUp}/>
                        <Route exact path="/singin" component={SingIn}/>
                        <Route exact path="/create" component={CreateArticlePage}/>
                        <Articles />
                        <Route exact path="/profile" component={Profile}/>
                    </div>
                </div>

            </BrowserRouter>
        </Provider>
    }
}
const Articles = () => (
    <Switch>
        <Route exact path='/articles' component={Dashboard}/>
        <Route path='/articles/:id' exact component={ArticlePage}/>
        <Route path='/articles/:id/chart' exact component={ArticleChartPage}/>
    </Switch>
);

export default Root;