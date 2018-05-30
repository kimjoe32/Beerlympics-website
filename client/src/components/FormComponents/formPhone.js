import React from 'react';

/*
    Phone number input
*/

export default({ input, label, id, fieldName, isEditing, meta: { error, touched }}) => {
    const isActive = isEditing ? 'active' : '';
    return (
        <div className={`input-field ${isActive}`}>
            <i className="material-icons prefix">phone</i>
            <input {...input} 
                type="tel" 
                id={ id } 
                maxLength="10"
                onKeyPress={ e => {
                    if (e.key === 'Enter') e.preventDefault();
                }
            }/>
            <label className={isActive} htmlFor={ id }>{ fieldName }</label>
            <div className="red-text" style = {{ marginBottom: '20px', marginLeft:'45px' }}>
                {touched && error}
            </div>
        </div>
    );
}