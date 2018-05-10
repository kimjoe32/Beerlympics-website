import React, { Component } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormCardAdder from '../../components/FormComponents/formCardAdder';
import FwdAndBackBtns from '../../components/FormComponents/fwdAndBackBtns';
import validate from '../../utils/validateAddTeamFormp3';
class AddTeamMembersForm extends Component {
    handleCardChange=(value, type) => {
        //when a card is added/deleted, update form state
        if(type === "teamMembers" && value !== []) {
            this.props.change('teamMembers', value);
        }
    }

    render() {
        const { formValues } = this.props;
        return (
        <div>
            <h5><i className="material-icons left">people</i>Add Team Members (Max 4)</h5>
            <form onSubmit={this.props.handleSubmit}>
                <Field fieldName="teamMembers"
                    name="teamMembers"
                    component={ FormCardAdder }
                    onCardChange={ this.handleCardChange }
                    existingNames={ (typeof formValues.teamMembers === 'undefined' ? [] : formValues.teamMembers) }
                    type="text"
                />
            <FwdAndBackBtns prevPage={this.props.previousPage} style={{marginTop: "5px"}}/>    
            </form>
        </div>
        );
    }
}

 AddTeamMembersForm = reduxForm({
    validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'addTeamForm'
})(AddTeamMembersForm);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({change}, dispatch);
}

function mapStateToProps(state) {
    return {
        formValues: state.form.addTeamForm.values 
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTeamMembersForm);