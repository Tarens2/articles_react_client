import React from 'react';
import { connect } from "react-redux";
import { postArticles } from "../../actions/articles";
import style from './style.css';
import './notify.css';
import ReactNotify from 'react-notify';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            text: '',
            title: ''
        }
    }
    componentWillMount() {

    }

    submitHandler(event) {
        event.preventDefault();
        this.props.postArticles({
            token: this.props.authToken.token,
            text: this.state.text,
            title: this.state.title
        }, this.callback.bind(this));

    }

    callback(title, status) {
        this.setState({title: "", text: ""})
        if(status) {
            this.refs.notificator.success("Статья отправлена.", title, 5000);
        }
        else {
            this.refs.notificator.error("Статья не отправлена", title, 5000);
        }
        
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        let { title, text } = this.state;
        return (
            <div className="row">
                <form className="article-create__form" onSubmit={this.submitHandler}>
                    <p className="article-create__label">Title your article:</p>
                    <input name="title" value={title} onChange={this.onChangeHandler} />
                    <p className="article-create__label">Text your article:</p>
                    <textarea className="article-create__textarea" name="text" value={text} onChange={this.onChangeHandler}></textarea>
                    <button disabled={!text || !title} type="submit" className={`btn article-create__button`}>Отправить</button>
                </form>
                
				<div>
					<ReactNotify ref='notificator'/>
				</div>
            </div>
        )
    }
}


export default connect((state) => ({ authToken: state.authToken }), { postArticles })(Dashboard);