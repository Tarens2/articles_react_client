import React from 'react';
import PropTypes from 'prop-types';

export default class SingupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            errors: {}
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
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if(this.isValid()) {
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
                }
            )
        }

    }

    render() {
        return (
            <form action="#" onSubmit={this.onSubmitHandler}>
                <h1>Join our community!</h1>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">Username</label>
                    <input
                        type="text"
                        onChange={this.onChangeHandler}
                        name="login"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="control-label">Password</label>
                    <input
                        type="password"
                        onChange={this.onChangeHandler}
                        name="password"
                        className="form-control"

                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
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