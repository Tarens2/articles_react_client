export default function articles(state = {articles: []}, action) {
    if (action.type === "SET_ARTICLES") {
        return  action.payload;
    }
    return state;
}