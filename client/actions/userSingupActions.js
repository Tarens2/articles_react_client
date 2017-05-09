import axios from 'axios';
// axios.defaults.withCredentials = true;

export function userSingupRequest(userData) {
    return dispatch => {
        return axios.post('http://tokenapp.dev/api/auth', userData);
    }
}