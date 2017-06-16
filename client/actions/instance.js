import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://tokenapp.dev/api',
    timeout: 10000,
    headers: {'Authorization': (localStorage.getItem('token'))? 'Bearer ' + localStorage.getItem('token') : undefined}
});

export default instance;