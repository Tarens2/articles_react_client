import {combineReducers} from "redux";
import authToken from './auth';
import articles from './articles';
import user from './user';
import watchers from './watchers';
import comments from './comments';

import {routerReducer} from 'react-redux-router';

export default combineReducers({
    routing: routerReducer,
    authToken,
    articles,
    user,
    watchers,
    comments
})