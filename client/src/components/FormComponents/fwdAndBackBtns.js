import React from 'react';
import { Icon } from 'react-materialize';

/*
    For the form wizard. A way to go forward and back between form pages
*/
export default ({ onSubmit, prevPage, style }) => {
    return (
        <div style={ style }>
            <button type="button" className="previous red waves-effect btn-flat white-text left hoverable" onClick={prevPage}>
            <Icon left>keyboard_arrow_left</Icon>
                Back
            </button>
            <button type="submit" className="blue waves-effect btn-flat white-text right hoverable">
                Next
                <Icon right> keyboard_arrow_right</Icon>
            </button>
        </div>
    );
}