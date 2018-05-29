import React, { Component } from 'react';
import AddTeamForm from '../../containers/formContainers/addTeamForm';
import { withRouter } from 'react-router-dom';
//wrap the component to access withRouter to access the pathname
const AddTeam = withRouter(props => <AddTeamA {...props}/>);
class AddTeamA extends Component {
    render() {
        const isEditing=this.props.location.pathname.includes('edit');
        return (
            <div>
                <h1>{isEditing ? "Edit a" : "Add a New"} Team</h1>
                <AddTeamForm isEditing={isEditing}/>
            </div>
        );
    }
}

export default AddTeam;