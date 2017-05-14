import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class ArticlePage extends React.Component {
    render() {
        this.setState({article: _.find(this.props.articles, 'id', this.props.match.params.id)});
        return (
            <div className="jumbotron">
                <h1>Article</h1>
            </div>
        )
    }
}

export default connect((state) => ({articles: state.articles}), {})(ArticlePage);