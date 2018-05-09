import React from 'react';
import { Autocomplete } from 'react-materialize';
/*
    Basic Input field
    Ignores if user presses enter
*/
export default({ input, style, data, onKeyPress, title, handleCountrySelection}) => {
    function updateCountry(country) {
        handleCountrySelection(country, 'country');
    };
    return (
        <div>
            <Autocomplete
                {...input}
                style={ style }
                data={ data }
                title={ title }
                type="select"
                onKeyPress={ onKeyPress }
                onAutocomplete={ (value) => {updateCountry(value)} }
            />
        </div>
    )
}   