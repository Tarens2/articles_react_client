import instance from './instance';

export function setArticleComment(userData, callback) {
    return dispatch => {
        instance.post(`/articles/${userData.article_id}/comment?token=${userData.token}`,
            userData)
            .then((data) => {
                    dispatch({type: 'SET_ARTICLE_COMMENT', payload: data.data});
                    callback && callback();
                },
                (data) => {
                    callback && callback();
                }
            )
    }
}

