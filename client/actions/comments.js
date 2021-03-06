import instance from './instance';

export function setArticleComment(userData, callback) {
    return dispatch => {
        instance.post(`/articles/${userData.article_id}/comment`,
            userData)
            .then((data) => {
                    dispatch({type: 'SET_COMMENTS', payload: data.data});
                    callback && callback();
                },
                (data) => {
                    callback && callback();
                }
            )
    }
}

export function getComments(userData, callback) {
    return dispatch => {
        instance.get(`/articles/${userData.article_id}/comments`, { params: userData })
            .then((data) => {
                    dispatch({ type: 'SET_COMMENTS', payload: data.data });

                    callback && callback();
                },
                (data) => { callback && callback(); }
            )
    }
}

export function postCommentLike(userData, callback) {
    return dispatch => {
        instance.post(`/comments/${userData.comment_id}/like?token=${userData.token}`, userData)
            .then((data) => {
                    dispatch({ type: 'SET_COMMENTS', payload: data.data });

                    callback && callback();
                },
                (data) => { callback && callback(); }
            )
    }
}
