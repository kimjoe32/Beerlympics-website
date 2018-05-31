import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { reduxForm } from 'redux-form';
import SelectTeamComponent from '../selectTeamComponent';


const submitBtnStyle = {
    marginTop:"5px"
}

class SelectTeamToEdit extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h2 className="flow-text">Select a Team to Edit</h2>
                <div>
                    <SelectTeamComponent />

                    <button type="submit" className="next waves-effect waves-light btn-large hoverable" style={submitBtnStyle}>
                        Edit This Team
                        <Icon right>keyboard_arrow_right</Icon>
                    </button>
                </div>
            </form>
        );
    }
}

SelectTeamToEdit = reduxForm({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'addTeamForm'
})(SelectTeamToEdit);


export default SelectTeamToEdit;