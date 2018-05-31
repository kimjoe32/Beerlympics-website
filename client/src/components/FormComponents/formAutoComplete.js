import React from 'react';
import { Autocomplete } from 'react-materialize';
/*
    Basic Input field
    Ignores if user presses enter
*/
export default({ input, 
                style, 
                data, 
                onKeyPress, 
                title, 
                handleCountrySelection, 
                meta: { error, touched }}) => {

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
                limit={ 5 }
                onKeyPress={ onKeyPress }
                onAutocomplete={ (value) => {updateCountry(value)} }
            />
            <div className="red-text" style = {{ marginBottom: '20px' }}>
				{touched && error}
			</div>
        </div>
    )
}   