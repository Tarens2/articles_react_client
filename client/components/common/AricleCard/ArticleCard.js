import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Article.css';
import CommentIcon from './ic_comment_black_24px.svg';
const ArticleCard = ({title, text, id, comments, user}) => (
    <div className={`${styles.card}`}>
        <h3>
            <Link to={`/articles/${id}`}>{title}</Link>
        </h3>
        <p>{text}</p>
        <span className={styles.author}>By <b>{user.login}</b></span>
        <div className={styles.bottom_info}>
            <div className={`${styles.bottom_line}`}>
                <CommentIcon className={styles.comment_icon}/>
                <span>{comments && comments.length}</span>
            </div>
        </div>
    </div>
);

export default ArticleCard;