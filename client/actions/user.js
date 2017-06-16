import instance from './instance';

export function userSingInRequest(userData, callback) {
    return dispatch => {
        instance.post('/auth', userData)
            .then((data) => {
                    dispatch({type: 'SET_TOKEN', payload: {token: data.data.token, authed: true}});
                    localStorage.setItem('token', data.data.token);
                    callback && callback();
                },
                (data) => {
                    callback && callback();
                }
            )
    }
}

export function userSingInFromStorage(data, callback) {
    return dispatch => {
        let token = localStorage.getItem('token');
        if (!token) return;
        dispatch({
            type: 'SET_TOKEN',
            payload: {token, authed: true}
        });
        instance.get('users/me')
            .then((data) => {

                dispatch({
                    type: 'SET_USER',
                    payload: {user: data.data.user}
                });
                callback && callback();
            });
    }
}

export function userSingOut(data, callback) {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch({
            type: "REMOVE_TOKEN"
        });
    }
}

export function userSingUpRequest(userData) {
    return dispatch => {
        instance.post('/register', userData)
            .then((data) => {

                dispatch({
                    type: 'SET_USER',
                    payload: {user: data.data.user}
                });
                callback && callback();
            });
    }
}
