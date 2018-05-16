import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form'
import * as actions from '../../actions';



/*
    Let user review all data before submitting
*/
let ReviewAddTeamForm = ({ formValues, previousPage,sendNewTeamData }) => {
    function renderReviewField() {
        const values = [formValues.firstName + ' ' + formValues.lastName,
                        formValues.country,
                        formValues.email,
                        formValues.phone,
                        formValues.teamMembers.slice().join(', ')];
        return values.map((field) => {
            return (
                <div key={ field + 'review'}>
                    <p className="flow-text">{ field }</p>
                    <div className="divider"></div>
                </div>
            );
        });
    };
    return (
        <div>
            <h5><i className="material-icons left">search</i>Team Review</h5>
            <div>
                <div className="divider"></div>
                {renderReviewField()}
            </div>
            <button type="button" className="previous red waves-effect btn-flat white-text left hoverable" 
                onClick={previousPage}
                >
                <i className="material-icons left">keyboard_arrow_left</i>
                Back
            </button>
            <Link to="/" 
                className="green btn-flat right white-text waves-effect hoverable"
                onClick={() => sendNewTeamData(formValues) } 
            >
                Submit
                <i className="material-icons right">email</i>
            </Link>
        </div>
    );
}

function mapStateToProps(state) {
	return {
		formValues: state.form.addTeamForm.values
	};
}

ReviewAddTeamForm = reduxForm({
    form: 'addTeamForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
    // validate
})(ReviewAddTeamForm)

export default connect(mapStateToProps, actions)(ReviewAddTeamForm);