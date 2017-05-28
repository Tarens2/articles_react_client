import instance from "./instance";

export function watchArticle(userData, callback) {
    return dispatch => {
        instance.post(`/articles/${userData.article_id}/watch?token=${userData.token}`, userData)
            .then((data) => {
                    callback && callback();
                },
                (data) => { callback && callback(); }
            )
    }
}

export function getWatchers(userData, callback) {
    return dispatch => {
        instance.get(`/articles/${userData.article_id}/watchers`, { params: userData })
            .then((data) => {
                    dispatch({ type: 'SET_WATCHERS', payload: data.data });

                    callback && callback();
                },
                (data) => { callback && callback(); }
            )
    }
}
