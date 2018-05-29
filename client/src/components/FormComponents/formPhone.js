import React from 'react';

/*
    Phone number input
*/

export default({ input, label, id, fieldName, meta: { error, touched }}) => {
    return (
        <div className="input-field active">
            <i className="material-icons prefix">phone</i>
            <input {...input} 
                type="tel" 
                id={ id } 
                maxLength="10"
                onKeyPress={ e => {
                    if (e.key === 'Enter') e.preventDefault();
                }
            }/>
            <label className="active" htmlFor={ id }>{ fieldName }</label>
            <div className="red-text" style = {{ marginBottom: '20px', marginLeft:'45px' }}>
                {touched && error}
            </div>
        </div>
    );
}