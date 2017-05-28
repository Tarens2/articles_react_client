import instance from './instance';

export function getArticles(userData, callback) {
    return dispatch => {
        instance.get('/articles', { params: userData })
            .then((data) => {
                dispatch({ type: 'SET_ARTICLES', payload: data.data });

                callback && callback();
            },
            (data) => { callback && callback(); }
            )
    }
}

export function postArticles(userData, callback) {
    return dispatch => {
        instance.post(`/article?token=${userData.token}`, userData)
            .then((data) => {
                dispatch({ type: 'SET_ARTICLES', payload: data.data });

                callback && callback(userData.title, true);
            },
            (data) => { callback && callback(userData.title, false); }
            )
    }
}


