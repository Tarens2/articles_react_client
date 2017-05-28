import React from 'react';
import CommentsBlockItem from '../CommentsBlockItem/CommentsBlockItem';
import _ from 'lodash';

const CommentsBlock = ({comments}) => {
    let renderCommentsBlockItem = () => {
        return _.map(comments, ({login , text}, key) => {
            return <CommentsBlockItem key={key} login={login} text={text} />
        }).reverse();
    };
    return <div>{renderCommentsBlockItem()}</div>
};

export default CommentsBlock;
