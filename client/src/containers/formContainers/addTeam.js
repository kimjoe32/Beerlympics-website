import React, { Component } from 'react';
import AddTeamForm from './addTeamForm';
class AddTeam extends Component {
    render() {
        return (
            <div>
                <h1>Add a New Team</h1>
                <AddTeamForm />
            </div>
        );
    }
}

export default AddTeam;