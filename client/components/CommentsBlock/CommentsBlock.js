import React from 'react';
import CommentsBlockItem from '../CommentsBlockItem/CommentsBlockItem';
import _ from 'lodash';

const CommentsBlock = ({comments}) => {
    let renderCommentsBlockItem = () => {
        return _.map(comments, ({user = {}, text}, key) => {
            return <CommentsBlockItem key={key} user={user} text={text} />
        }).reverse();
    };
    return <div>{renderCommentsBlockItem()}</div>
};

export default CommentsBlock;
