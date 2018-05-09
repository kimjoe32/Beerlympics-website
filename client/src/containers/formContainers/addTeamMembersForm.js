import React, { Component } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import FormCardAdder from '../../components/FormComponents/formCardAdder'
import FwdAndBackBtns from '../../components/FormComponents/fwdAndBackBtns'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddTeamMembersForm extends Component {
    handleCardChange=(value, type) => {
        // console.log(value);
        if(type === "teamMembers" && value !== []) {
            this.props.change('teamMembers', value);
        }
    }
    render() {
        return (
        <div>
            <h5><i className="material-icons left">people</i>Add Team Members (Max 4)</h5>
            <form onSubmit={this.props.handleSubmit}>
                <Field fieldName="teamMembers"
                    name="teamMembers"
                    component={ FormCardAdder }
                    onCardChange={ this.handleCardChange }
                    type="text"
                />
            <FwdAndBackBtns prevPage={this.props.previousPage} style={{marginTop: "5px"}}/>    
            </form>
        </div>
        );
    }
}

export default reduxForm({
    // validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'addTeamForm'
})(AddTeamMembersForm);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({change}, dispatch);
}

AddTeamMembersForm = connect(
    mapDispatchToProps
)(AddTeamMembersForm);