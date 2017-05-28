export default function articles(state = [], action) {
    if (action.type === "SET_WATCHERS") {
        return  action.payload;
    }
    return state;
}