import React from 'react';
/*
    Basic Input field
    Ignores if user presses enter
*/
export default({ input, label, id, fieldName, isEditing, meta: { error, touched } }) => {
    const isActive = isEditing ? 'active' : '';
    return (
        <div className={`input-field ${isActive}`} >
            <input {...input} id={ id } type="text" onKeyPress={ e => {
                if (e.key === 'Enter') e.preventDefault();
            }}/>
            <label className={isActive} htmlFor={ id }>{ fieldName }</label>
            <div className="red-text" style = {{ marginBottom: '20px' }}>
                {touched && error}
            </div>   
        </div>
    );
}