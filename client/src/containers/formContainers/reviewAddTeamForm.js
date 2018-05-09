import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


/*
    Let user review all data before submitting
*/
const ReviewAddTeamForm = ({ formValues, onSubmit, previousPage }) => {
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
            <button
				onClick={() => onSubmit(formValues)}
				className="green btn-flat right white-text">
				Submit
				<i className="material-icons right">email</i>
			</button>
        </div>
    );
}

function mapStateToProps(state) {
	return {
		formValues: state.form.addTeamForm.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(ReviewAddTeamForm));