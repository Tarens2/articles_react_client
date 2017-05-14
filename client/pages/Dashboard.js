import React from 'react';
import {connect}  from "react-redux";
import ArticleCard from '../components/common/AricleCard/ArticleCard';
import {getArticles} from '../actions/articles';

class Dashboard extends React.Component {
    componentWillMount() {
        if(this.props.authToken.authed) {
            this.props.getArticles({
                token: this.props.authToken.token
            });
        }
    }
    renderArticles() {
        const {authToken, articles} = this.props;
        return (authToken.authed && articles && articles.length)?
        articles.map((article, index) => (
            <ArticleCard
                className="col-md-4"
                key={index}
                title={article.title}
                text={article.text}
                comments={article.comments}
                user={article.user}
                id={article.id}
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


export default connect((state)=>({authToken: state.authToken, articles: state.articles}), {getArticles})(Dashboard);