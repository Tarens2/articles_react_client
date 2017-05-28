import React from 'react';
import {connect} from 'react-redux';
import {setArticleComment} from '../../actions/comments';
import style from './comment_form.css';

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
        if(this.state.comment.length == 0) return;
        this.props.setArticleComment({
            token: this.props.authToken.token,
            article_id: this.props.article_id,
            text: this.state.comment
        });
        this.setState({
            comment: ''
        });
    }
    render() {
        return (
            <div>
                <h4>Write our comment</h4>
                <textarea name="comment" className="comment-form__input_text" onChange={this.onChangeHandler} value={this.state.comment}>
                </textarea>
                <button disabled={!this.state.comment} className={`btn comment-form__send`} onClick={this.onClickHandler}>Send</button>
            </div>
        );
    }
};

export default connect(state => ({authToken: state.authToken}), {setArticleComment})(CommentForm);