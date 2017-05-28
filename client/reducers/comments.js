export default function articles(state = [], action) {
    if (action.type === "SET_COMMENTS") {
        return  action.payload;
    }
    return state;
}