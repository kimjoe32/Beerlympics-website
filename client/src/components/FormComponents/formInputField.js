import React from 'react';
/*
    Basic Input field
    Ignores if user presses enter
*/
export default({ input, label, id, fieldName }) => {
    return (
        <div className="input-field">
            <input {...input} id={ id } type="text" onKeyPress={ e => {
                if (e.key === 'Enter') e.preventDefault();
            }}/>
            <label className="active" htmlFor={ id }>{ fieldName }</label>
        </div>
    )
}