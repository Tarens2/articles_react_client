import React from 'react';
import {connect}  from "react-redux";
import PropTypes from 'prop-types';

import SingInForm from '../components/SingInForm';
import {userSingInRequest} from '../actions/user';

class SingInPage extends React.Component {
    render() {
        const {userSingInRequest} = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SingInForm requestAction={userSingInRequest}/>
                </div>
            </div>
        )
    }
}
SingInPage.propTypes = {
    userSingInRequest: PropTypes.func.isRequired
};


export default connect((state)=>({authToken: state.authToken}), {userSingInRequest})(SingInPage);