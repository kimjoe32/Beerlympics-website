import React, { Component } from 'react';
import { sendNewTeamData } from '../../actions/index';
import AddTeamForm from './addTeamForm';
class AddTeam extends Component {
    render() {
        return (
            <div>
                <h1>Add a New Team</h1>
                <AddTeamForm onSubmit={sendNewTeamData}/>
            </div>
        );
    }
}

export default AddTeam;