import React from 'react';
import {Link} from 'react-router-dom';

import './Article.css';
import CommentIcon from './ic_comment_black_24px.svg';
import LikeIcon from './like.svg';


const ArticleCard = ({title, text, id, comments_count, likes_count, user, onClickHandler}) => (
    <div className={`card`}>
        <h3>
            <Link to={`/articles/${id}`}>{title}</Link>
        </h3>
        <p>{text}</p>
        <span className="author">By <b>{user.login}</b></span>
        <div className="bottom_info">
            <div className="bottom_line">
                <div>
                    <CommentIcon className="comment_icon"/>
                    <span>{comments_count}</span>
                </div>
                <button onClick={onClickHandler} className="article-card__button">
                    <LikeIcon className="comment_icon"/>
                    <span>{likes_count}</span>
                </button>
            </div>
        </div>
    </div>
);

export default ArticleCard;