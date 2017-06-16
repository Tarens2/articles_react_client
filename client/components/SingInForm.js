import React from 'react';
import PropTypes from 'prop-types';
import {createBrowserHistory} from 'history';
import {withRouter} from 'react-router';

import validateInput from "../tools/singin_validate";
import TextFieldGroup from './common/TextFieldGroup';

let history = createBrowserHistory();
class SingInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
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

            this.props.requestAction(this.state, this.undisableButton.bind(this));
        }
    }
    undisableButton() {
        // delete require.cache[require.resolve('../actions/instance')];
        // require('../actions/instance');
        window.location.reload();
        this.props.history.push('/');
        this.setState({
            isLoading: false
        })
    }
    render() {
        const {errors} = this.state;

        return (
            <form action="#" onSubmit={this.onSubmitHandler}>
                <h1>Log in to Community!</h1>
                <TextFieldGroup
                    name="login"
                    onChange={this.onChangeHandler}
                    type="text"
                    errors={errors}
                    label="Login"
                />
                <TextFieldGroup
                    name="password"
                    onChange={this.onChangeHandler}
                    type="password"
                    label="Password"
                    errors={errors}
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

SingInForm.propTypes = {
    requestAction: PropTypes.func.isRequired
};

export default withRouter(SingInForm);