import React, { Component } from 'react';
import AskIfCaptain from './askIfCaptain';
import AddCaptainForm from './addCaptainForm';
import AddTeamMembersForm from './addTeamMembersForm';
import ReviewAddTeamForm from './reviewAddTeamForm';
import PropTypes from 'prop-types';

/*
	Controls the wizard form- which page is shown
*/
class AddTeamForm extends Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.state = {
		  	page: 1
		};
	}

	nextPage() {
		this.setState({ page: this.state.page + 1 });
	}
	
	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}

    render() {
		const { onSubmit } = this.props;
   		const { page } = this.state;

		return (
			<div>
				{page === 1 && <AskIfCaptain onSubmit={this.nextPage} />}
				{page === 2 && (
					<AddCaptainForm
					previousPage={this.previousPage}
					onSubmit={this.nextPage}
					/>
				)}
				{page === 3 && (<AddTeamMembersForm  
					previousPage={this.previousPage}
					onSubmit={this.nextPage} />
				)}
				{page === 4 && (<ReviewAddTeamForm  
					previousPage={this.previousPage}
					onSubmit={onSubmit} />
				)}
			</div>
		);
    }
}
AddTeamForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
}
// function validate(values) {
// 	const errors = {};
// 	return errors;
// }

export default AddTeamForm;