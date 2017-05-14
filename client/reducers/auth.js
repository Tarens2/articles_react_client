export default function auth(state = {authed: false}, action) {
    if (action.type === "SET_TOKEN") {
        return {
            authed: true,
            token: action.payload.token
        }
    } else
    if (action.type === "REMOVE_TOKEN") {
        return {
            authed: false
        }
    }
    return state;
}