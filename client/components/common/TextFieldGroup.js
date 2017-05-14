import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';


export default class TextFieldGroup extends React.Component {
    render() {
        const {errors, name, onChange, type, label} = this.props;

        return (
            <div className={classNames("form-group", {'has-error': errors[name]})}>
                <label htmlFor={name} className="control-label">{label}</label>
                <input
                    type={type}
                    onChange={onChange}
                    name={name}
                    className="form-control"
                    id={name}
                />
                {errors[name] && <span className="help-block">{errors[name]}</span>}
            </div>
        )
    }
}

TextFieldGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    errors: PropTypes.object,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
    type: 'text',
    label: 'Label'
};