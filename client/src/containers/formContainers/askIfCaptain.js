import React from 'react';
import { Link } from 'react-router-dom';
import  { reduxForm } from 'redux-form';

const AskIfCaptain = props => {
    const { handleSubmit, isEditing } = props;
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="flow-text">Are you the captain of the team?</h2>
            <h2 className="flow-text">Only 1 person should {isEditing ? 'edit information' : 'sign up'} for the entire team.</h2>
            <blockquote>If you are not sure, speak to your entire team.</blockquote>
            <div>
                <Link to="/" className="red btn-large white-text hoverable">
                    Cancel
                    <i className="material-icons left">cancel</i>
                </Link>

                <button type="submit" className="next waves-effect waves-light btn-large hoverable" style={{marginLeft: "5px"}}>
                    I am the Captain
                    <i className="material-icons left">check</i>
                </button>
            </div>
        </form>
    );
}

export default reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    form: 'addTeamForm'
})(AskIfCaptain);