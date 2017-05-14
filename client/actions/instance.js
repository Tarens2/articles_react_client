import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://tokenapp.dev/api',
    timeout: 10000
});

export default instance;