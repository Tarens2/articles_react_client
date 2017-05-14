import React from 'react';
import {connect}  from "react-redux";
import styles from './styles.css';

class ProfilePage extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="col-md-6">
                        <div className={styles.image}></div>
                    </div>
                    <div className="col-md-6">
                        <p><b>Name: </b>{user.name}</p>
                        <p><b>Email: </b>{user.email}</p>
                        <p><b>Login: </b>{user.login}</p>

                    </div>
                </div>
            </div>
        )
    }
}


export default connect((state)=>({authToken: state.authToken, user: state.user}), {})(ProfilePage);