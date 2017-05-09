import React from 'react';
import {connect}  from "react-redux";
import PropTypes from 'prop-types';

import SingupForm from '../components/SingupForm';
import {userSingupRequest} from '../actions/userSingupActions';

class SingupPage extends React.Component {
    
    render() {
        const {userSingupRequest} = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SingupForm userSingupRequest={userSingupRequest}/>
                </div>
            </div>
        )
    }
}
SingupPage.propTypes = {
    userSingupRequest: PropTypes.func.isRequired
};


export default connect((state)=>({}), {userSingupRequest})(SingupPage);