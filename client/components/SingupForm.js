import React from 'react';
import PropTypes from 'prop-types';
import validateInput from "../tools/singup";
import {userSingUpRequest} from '../actions/user';
import {connect}  from "react-redux";


import TextFieldGroup from './common/TextFieldGroup';

class SingUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'qwe',
            password: 'qwe',
            password_confirmation: 'qwe',
            name: 'qwe',
            email: 'qwe@qwe.ru',
            errors: {},
            isLoading: false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({errors});

        }
        return isValid;
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({
                errors: {},
                isLoading: true
            });
            
            this.props.userSingUpRequest(this.state);
        }

    }

    render() {
        const {errors} = this.state;
        return (
            <form action="#" onSubmit={this.onSubmitHandler}>
                <h1>Join our community!</h1>
                <TextFieldGroup
                    name="name"
                    onChange={this.onChangeHandler}
                    type="text"
                    errors={errors}
                    label="Name"
                />
                <TextFieldGroup
                    name="login"
                    onChange={this.onChangeHandler}
                    type="text"
                    errors={errors}
                    label="Login"
                />
                <TextFieldGroup
                    name="email"
                    onChange={this.onChangeHandler}
                    type="text"
                    errors={errors}
                    label="Email"
                />
                <TextFieldGroup
                    name="password"
                    onChange={this.onChangeHandler}
                    type="password"
                    label="Password"
                    errors={errors}
                />
                <TextFieldGroup
                    name="password_confirmation"
                    onChange={this.onChangeHandler}
                    type="password"
                    errors={errors}
                    label="Password Confirmation"
                />
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Sing Up
                    </button>
                </div>
            </form>
        )
    }
}



export default connect((state)=>({}), {userSingUpRequest})(SingUpForm);