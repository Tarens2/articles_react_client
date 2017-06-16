import React from 'react';
import CommentsBlockItem from '../CommentsBlockItem/CommentsBlockItem';
import _ from 'lodash';

const CommentsBlock = ({comments}) => {
    let renderCommentsBlockItem = () => {
        return _.map(comments, ({id, login , text, likes_count}, key) => {
            return <CommentsBlockItem
                comment_id={id}
                key={key}
                login={login}
                text={text}
                likes_count={likes_count}
            />
        }).reverse();
    };
    return <div>{renderCommentsBlockItem()}</div>
};

export default CommentsBlock;
