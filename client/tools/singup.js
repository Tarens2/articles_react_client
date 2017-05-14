import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    console.log('validateInput', data);
    if (Validator.isEmpty(data.name)) {
        errors.name = 'This field is required';
    }
    if (Validator.isEmpty(data.login)) {
        errors.login = 'This field is required';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if (Validator.isEmpty(data.password_confirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if (!Validator.equals(data.password, data.password_confirmation)) {
        errors.password_confirmation = 'Passwords must match';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}