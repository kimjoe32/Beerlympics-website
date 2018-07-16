import { getCountriesArr } from './utilities';
import Axios from 'axios';

export const validate = values => {
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
    } else {
        const rawNum = values.phone.toString().replace(/[^0-9]/, '');
        if (rawNum.length !== 10) {
            errors.phone = 'Not valid phone number';
        }
    }
    return errors;
}

export const asyncValCountryName = (values, dispatch)=>  {
    //returns if country name is available
    const { country, isEditing } = values;
    console.log(isEditing);
    if (isEditing) {
        console.log('ignoring country name');
        return new Promise( (resolve, reject) => {
            return resolve();
        });
    }
    else {
        console.log('checking country name');
    }
    // console.log(country);
    return Axios.post('/api/isCountryAvail', {country})
        .then(response => {
            // console.log(response);
            return new Promise( (resolve, reject) => {
                if (!response.data) {
                    // console.log('rejected team name');
                    return reject({country: 'Country is taken'});
                    //reject(({country: 'Country is taken'}));
                }
                else {
                    // console.log('accepted team name');
                    return resolve();
                }
            });        
    });
}