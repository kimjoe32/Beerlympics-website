import { getCountriesArr } from './utilities';

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    if (!values.country) {
        errors.country = 'Required'
    }
    else if (getCountriesArr().indexOf(values.country) === -1) {
        //check if a valid country
        errors.country = 'Not a real place';
    }

    if (!values.email) {
        if (!values.email) {
            errors.email = 'Required';
        } 
    } else {
        const validator = require("email-validator");
        if (!validator.validate(values.email)) {
            errors.email = 'Invalid email address';
        }
    }
    
    //too short or didn't enter 7/10 digit phone number
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (values.phone.length !== 10 && values.phone.length !== 7) {
        errors.phone = 'Not valid phone number';
    }
    return errors;
}
export default validate;