import React from 'react';
import style from './comments_block_item_style.css';

const CommentsBlockItem = ({text, user}) => {
    return (<div className="comments-block__comment">
        <p className="comments-block__user"><b>{user.login}</b></p>
        <p>{text}</p>
    </div>)
};

export default CommentsBlockItem;