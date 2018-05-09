import React from 'react';

/*
    For the form wizard. A way to go forward and back between form pages
*/
export default ({ onSubmit, prevPage, style }) => {
    return (
        <div style={ style }>
            <button type="button" className="previous red waves-effect btn-flat white-text left hoverable" onClick={prevPage}>
                <i className="material-icons left">keyboard_arrow_left</i>
                Back
            </button>
            <button type="submit" className="blue waves-effect btn-flat white-text right hoverable">
                Next
                <i className="material-icons right">keyboard_arrow_right</i>
            </button>
        </div>
    );
}