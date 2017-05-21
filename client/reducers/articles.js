import _ from 'lodash';

export default function articles(state = [], action) {
    if (action.type === "SET_ARTICLES") {
        return action.payload;
    } else if (action.type === "SET_ARTICLE_COMMENT") {
        return action.payload;
    }
    return state;
}