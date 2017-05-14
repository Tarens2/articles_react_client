import React from 'react';
import PropTypes from 'prop-types';
import validateInput from "../tools/singup";
import {createBrowserHistory} from 'history';

import TextFieldGroup from './common/TextFieldGroup';

let history = createBrowserHistory();
export default class SingupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            password_confirmation: '',
            name: '',
            email: '',
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
            this.props.userSingupRequest(this.state).then(
                (data) => {
                    console.log(data);
                },
                (data) => {
                    console.log(data);
                    this.setState({
                        errors: data,
                        isLoading: false
                    })
                }
            )
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

SingupForm.propTypes = {
    userSingupRequest: PropTypes.func.isRequired
};