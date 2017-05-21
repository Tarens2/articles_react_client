export default function articles(state = {}, action) {
    if (action.type === "SET_USER") {
        return  action.payload.user;
    }
    return state;
}