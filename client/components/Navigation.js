import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {userSingInFromStorage, userSingOut} from '../actions/user';
import {getArticles} from '../actions/articles';

class Navigation extends React.Component {
    componentWillMount() {
        this.props.userSingInFromStorage(null, () => {
                this.props.getArticles.call(this, {token: this.props.authToken.token})
            }
        );
    }

    renderNotAuthed() {
        if (!this.props.authToken.authed)
            return [
                <li key="1">
                    <Link to="/singin">Sing in</Link>
                </li>,
                <li key="2">
                    <Link to="/singup">Sing up</Link>
                </li>
            ];
        else
            return [
                <li key="2">
                    <Link to="/profile">{ this.props.user.name }</Link>
                </li>,
                <li key="1">
                    <Link to="/logout" onClick={this.onClickHandler.bind(this)}>Logout</Link>
                </li>
            ]
    }

    onClickHandler(event) {
        event.preventDefault();
        this.props.userSingOut.call(this);
    }

    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Red Dice</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        {this.renderNotAuthed()}
                    </ul>
                </div>
            </div>
        </nav>
    }
}
;

export default connect((state)=>({authToken: state.authToken, user: state.user}), {
    userSingInFromStorage,
    getArticles,
    userSingOut
})(Navigation);
