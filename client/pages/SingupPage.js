import React from 'react';
import {connect}  from "react-redux";
import PropTypes from 'prop-types';

import SingupForm from '../components/SingupForm';
import {userSingUpRequest} from '../actions/user';

class SingupPage extends React.Component {
    
    render() {
        const {userSingupRequest} = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SingupForm userSingupRequest={userSingUpRequest}/>
                </div>
            </div>
        )
    }
}
SingupPage.propTypes = {
    userSingUpRequest: PropTypes.func.isRequired
};


export default connect((state)=>({}), {userSingUpRequest})(SingupPage);