import React from 'react';
import {connect} from 'react-redux';
import {setArticleComment} from '../../actions/comments';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onClickHandler() {
        this.props.setArticleComment({
            token: this.props.authToken.token,
            article_id: this.props.article_id,
            text: this.state.comment
        })
    }
    render() {
        return (
            <div>
                <textarea name='comment' onChange={this.onChangeHandler}>
                    
                </textarea>
                <button onClick={this.onClickHandler}>Send</button>
            </div>
        );
    }
};

export default connect(state => ({authToken: state.authToken}), {setArticleComment})(CommentForm);