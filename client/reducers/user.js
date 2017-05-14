export default function articles(state = {articles: []}, action) {
    if (action.type === "SET_USER") {
        return  action.payload.user;
    }
    return state;
}