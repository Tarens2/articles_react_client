import React from 'react';
import styles from './Article.css';
import CommentIcon from './ic_comment_black_24px.svg';
const ArticleCard = ({title, text, comments, user}) => (
    <div className={`${styles.card}`}>
        <h3>{title}</h3>
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