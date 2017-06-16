import React from 'react';
import './comments_block_item_style.css';
import Like from "./like.svg";
import {postCommentLike} from '../../actions/comments';
import {connect }from 'react-redux';

const CommentsBlockItem = ({comment_id, text, login, likes_count, postCommentLike, authToken}) => {
    let onClickHandler = function (id) {
        postCommentLike({token: authToken.token, comment_id: id});
    };
    return (<div className="comments-block__comment">
        <p className="comments-block__user"><b>{login}</b></p>
        <p>{text}</p>
        <div className="comments-block__bottom">
            <button onClick={onClickHandler.bind(this, comment_id)} className="comments-block__button">
                <Like />
                <span className="comments-block__count">{likes_count}</span>
            </button>
        </div>
    </div>)
};

export default connect((state)=>({
    authToken: state.authToken
}), {postCommentLike })(CommentsBlockItem);
