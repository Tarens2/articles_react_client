import React from 'react';
import {connect}  from "react-redux";
import PropTypes from 'prop-types';

import SingupForm from '../components/SingupForm';

class SingupPage extends React.Component {
    
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SingupForm/>
                </div>
            </div>
        )
    }
}


export default connect((state)=>({}) )(SingupPage);