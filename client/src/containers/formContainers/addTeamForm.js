import React, { Component } from 'react';
import AskIfCaptain from './askIfCaptain';
import AddCaptainForm from './addCaptainForm';
import AddTeamMembersForm from './addTeamMembersForm';
import ReviewAddTeamForm from './reviewAddTeamForm';
import SelectTeamToEdit from './selectTeamToEdit';

/*
	Controls the wizard form- which page is shown
*/

class AddTeamForm extends Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		const { isEditing } = this.props;
		this.state = {
			isEditing:isEditing,
		  	page: isEditing ? 0 : 1
		};
	}

	nextPage() {
		this.setState({ page: this.state.page + 1 });
	}
	
	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}
	
    render() {
   		const { page, isEditing } = this.state;
		return (
			<div>
				{page === 0 && <SelectTeamToEdit onSubmit={this.nextPage} />}
				{page === 1 && 
					<AskIfCaptain 
					onSubmit={this.nextPage} 
					isEditing={isEditing}
					/>
				}
				{page === 2 && (
					<AddCaptainForm
					isEditing={isEditing}
					previousPage={this.previousPage}
					onSubmit={this.nextPage}
					/>
				)}
				{page === 3 && (<AddTeamMembersForm
					isEditing={isEditing}  
					previousPage={this.previousPage}
					onSubmit={this.nextPage}
					/>
				)}
				{page === 4 && (<ReviewAddTeamForm
					isEditing={isEditing}  
					previousPage={this.previousPage}
					/>
				)}
			</div>
		);
    }
}

export default AddTeamForm;