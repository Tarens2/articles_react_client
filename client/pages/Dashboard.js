import React from 'react';
import {connect}  from "react-redux";
import ArticleCard from '../components/common/AricleCard/ArticleCard';
import {getArticles, postArticleLike} from '../actions/articles';

class Dashboard extends React.Component {
    componentWillMount() {
        if (this.props.authToken.authed) {
            this.props.getArticles({
                token: this.props.authToken.token
            });
        }
    }

    onClickHandler(id) {
        this.props.postArticleLike({token: this.props.authToken.token, article_id: id})
    }
    
    renderArticles() {
        let {authToken, articles, filterUserId, userArticles, user_id, postArticleLike} = this.props;
        return (authToken.authed && articles && articles.length) ?
            (user_id ? userArticles : articles).map((article, index) => (
                <ArticleCard
                    className="col-md-4"
                    key={index}
                    title={article.title}
                    text={article.text}
                    comments_count={article.comments_count}
                    likes_count={article.likes_count}
                    user={article.user}
                    id={article.id}
                    onClickHandler={this.onClickHandler.bind(this, article.id)}
                />
            )) : '';
    }

    render() {
        return (
            <div className="row">
                {this.renderArticles()}
            </div>
        )
    }
}


export default connect((state)=>({authToken: state.authToken, articles: state.articles}), {getArticles, postArticleLike})(Dashboard);