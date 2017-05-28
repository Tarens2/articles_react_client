import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Dashboard from '../pages/Dashboard';
import CommentForm from '../components/CommentForm/CommentForm'
import CommentsBlock from '../components/CommentsBlock/CommentsBlock'
import {watchArticle} from "../actions/watcher";
import {getComments} from "../actions/comments";
import {Link} from 'react-router-dom';


class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

        let {watchArticle, getComments, match} = this.props;
        watchArticle({token: this.props.authToken.token, article_id: match.params.id});
        getComments({token: this.props.authToken.token, article_id: match.params.id});
    }
    componentWillReceiveProps(nextProps) {
        let {watchArticle, getComments, match} = nextProps;

        if(nextProps.match.params.id != this.props.match.params.id) {
            watchArticle({token: this.props.authToken.token, article_id: match.params.id});
            getComments({token: this.props.authToken.token, article_id: match.params.id});
        }
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
                    <Link to={`./${this.props.match.params.id}/chart`}> Chart </Link>
                </div>
                <CommentForm article_id={article.id}/>
                <CommentsBlock comments={this.props.comments}/>
                <div>
                    <h3>More articles from <i>{article.user.login}</i>:</h3>
                    <Dashboard user_id={user_id} userArticles={userArticles} />
                </div>
            </div>
        )
    }
}

export default connect((state)=>({
    articles: state.articles,
    authToken: state.authToken,
    comments: state.comments
}), { watchArticle, getComments })(ArticlePage);