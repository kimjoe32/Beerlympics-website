import React from 'react';

/*
    Phone number input
*/
export default({ input, label, id, fieldName }) => {
    return (
        <div className="input-field">
            <i className="material-icons prefix">phone</i>
            <input {...input} type="tel" id={ id } onKeyPress={ e => {
                if (e.key === 'Enter') e.preventDefault();
            }}/>
            <label htmlFor={ id }>{ fieldName }</label>
        </div>
    )
}