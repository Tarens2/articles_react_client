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

    renderLeftMenu() {
        if (this.props.authToken.authed)
            return [
                <li className="nav-item" key="3">
                    <Link className="nav-link" to="/articles">Articles</Link>
                </li>,
                <li className="nav-item" key="4">
                    <Link className="nav-link btn btn-outline-success" to="/create">Create articles</Link>
                </li>,
                <li className="nav-item" key="2">
                    <Link className="nav-link" to="/profile" >{ this.props.user.name }</Link>
                </li>
            ]
    }

    onClickHandler(event) {
        event.preventDefault();
        this.props.userSingOut.call(this, () => {window.location.replace('/')});
    }

    render() {
        return <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                    <Link to="/" className="navbar-brand">Blog</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        {this.renderLeftMenu()}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {this.renderRightMenu()}
                    </ul>
                </div>
        </nav>
    }

    renderRightMenu() {
        if (!this.props.authToken.authed)
            return [
                <li className="nav-item" key="1">
                    <Link className="nav-link" to="/singin">Sing in</Link>
                </li>,
                <li className="nav-item" key="2">
                    <Link className="nav-link" to="/singup">Sing up</Link>
                </li>
            ];
        else
            return [
                <li className="nav-item" key="1">
                    <Link to="/logout" className="nav-link" onClick={this.onClickHandler.bind(this)}>Logout</Link>
                </li>
            ]
    }
}

export default connect((state)=>({authToken: state.authToken, user: state.user}), {
    userSingInFromStorage,
    getArticles,
    userSingOut
})(Navigation);
