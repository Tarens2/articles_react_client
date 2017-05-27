import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Dashboard from '../pages/Dashboard';
import {getArticlesByUser_id} from '../actions/articles';
import CommentForm from '../components/CommentForm/CommentForm'
import CommentsBlock from '../components/CommentsBlock/CommentsBlock'

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
    }

    findArticle() {
        let found = _.find(this.props.articles, obj => obj.id == this.props.match.params.id);
        let foundMany;
        if (found) {
            foundMany = _.filter(this.props.articles, (obj) => obj.user_id == found.user_id && obj.id != found.id);
        }
        return {article: found, userArticles: foundMany};
    }

    render() {

        let {article = {user: {}}, userArticles }= this.findArticle();
        let user_id;
        if (userArticles && article && userArticles.length) user_id = article.user_id;
        return (
            <div>
                <div className="jumbotron">
                    <h1>{article.title}</h1>
                    <p>{article.text}</p>
                </div>
                <CommentForm article_id={article.id}/>
                <CommentsBlock comments={article.comments}/>
                <div>
                    <h3>More articles from <i>{article.user.login}</i>:</h3>
                    <Dashboard user_id={user_id} userArticles={userArticles} />
                </div>
            </div>
        )
    }
}

export default connect((state)=>({articles: state.articles, authToken: state.authToken}), {getArticlesByUser_id})(ArticlePage);