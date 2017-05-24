import React from 'react';
import {connect}  from "react-redux";
import {postArticles} from "../actions/articles";

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
            token:this.props.authToken.token,
            text: this.state.text,
            title: this.state.title
        });

    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        let {title, text} = this.state;
        return (
            <div className="row">
                <form onSubmit={this.submitHandler}>
                    <p>Title your article:</p>
                    <input name="title" value={title} onChange={this.onChangeHandler}/>
                    <p>Text your article:</p>
                    <textarea name="text" value={text} onChange={this.onChangeHandler}></textarea>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        )
    }
}


export default connect((state)=>({authToken: state.authToken}), {postArticles})(Dashboard);