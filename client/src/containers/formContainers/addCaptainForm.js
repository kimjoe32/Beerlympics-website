import React, { Component } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FwdAndBackBtns from '../../components/FormComponents/fwdAndBackBtns';
import Autocomplete from '../../components/FormComponents/formAutoComplete';
import FormInputField from '../../components/FormComponents/formInputField';
import FormPhone from '../../components/FormComponents/formPhone';
import { validate, asyncValCountryName } from '../../utils/validateAddTeamFormp2';
import { getCountriesObj } from '../../utils/utilities';
/*
    Shows form asking for the captain's information:
        Name
        Team name (country)
        Email
        Phone Number
*/
class AddCaptainForm extends Component {
    componentWillMount() {
        this.props.change('isEditing', this.props.isEditing);
    } 

    handleCountrySelection=(value, type) => {
        if (type==="country" && value !== []) {
            this.props.change('country', value);
        }
    }

    render() {
        const { isEditing } = this.props;
        return (
            <div>
                <h5><i className="material-icons left">person</i>{`${isEditing? 'Edit': 'Add'} Captain Information`} </h5>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="row">
                        <div className="col s6">
                            <Field fieldName="First Name"
                                component={ FormInputField } 
                                isEditing={ isEditing }
                                id="firstName"
                                type="text"
                                name="firstName" />
                        </div>
                        <div className="col s6">
                            <Field fieldName="Last Name"
                                isEditing={ isEditing }
                                component={ FormInputField } 
                                id="lastName"
                                type="text"
                                name="lastName" />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col s6">
                            <Field title="Select a country"
                                component={ Autocomplete }
                                type="select"
                                onKeyPress={ e => {if (e.key === 'Enter') e.preventDefault(); }}
                                name="country"
                                style={{padding:"0", width:"100%"}}
                                data={getCountriesObj()}
                                handleCountrySelection={ this.handleCountrySelection } 
                            >
                            </Field>
                        </div>
                        <div className="col s6">
                            <blockquote>
                                Your team name. Not where you're from. No "custom" team names
                            </blockquote>
                        </div>
                    </div>  


                    <div className="row">
                        <div className="col s6">
                            <Field fieldName="Email Address"
                                component={ FormInputField } 
                                isEditing={ isEditing }
                                id="email"
                                type="text"
                                name="email" /> 
                        </div>
                        <div className="col s6">
                            <Field fieldName="Phone"
                                component={ FormPhone }
                                isEditing={ isEditing }
                                id="phone"
                                type="text"
                                name="phone"
                            />
                        </div>
                    </div>

                    <FwdAndBackBtns prevPage={this.props.previousPage} />
                </form>	
            </div>
        );
    }
}

AddCaptainForm = reduxForm({
    validate,
    asyncValidate: asyncValCountryName,
    asyncBlurFields: ['country'],
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    form: 'addTeamForm',
    enableReinitialize : true
})(AddCaptainForm);

function mapStateToProps (state) {
    if (!state.selectedEditTeam) return {};
    let selectedTeam = {};
    for (var i = 0; i < state.allTeamsData.length; i++) {
        if (state.allTeamsData[i].teamName === state.selectedEditTeam) {
            const origSelectedTeam = state.allTeamsData[i];
            selectedTeam.firstName = origSelectedTeam.captainInfo.captainName.split(' ')[0];
            selectedTeam.lastName = origSelectedTeam.captainInfo.captainName.split(' ')[1];
            selectedTeam.email = origSelectedTeam.captainInfo.captainEmail;
            selectedTeam.phone = origSelectedTeam.captainInfo.captainPhone;
            selectedTeam.teamMembers = origSelectedTeam.teamMembers;
            selectedTeam.country = origSelectedTeam.teamName;
            break;
        }
    }
    return { initialValues: selectedTeam};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({change}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCaptainForm);