import React, { Component } from 'react';
import FormInputField from '../../components/FormComponents/formInputField';
import { reduxForm, Field } from 'redux-form';
import FwdAndBackBtns from '../../components/FormComponents/fwdAndBackBtns'
import { Autocomplete } from 'react-materialize';
import FormPhone from '../../components/FormComponents/formPhone';
import _ from 'lodash';

/*
    Shows form asking for the captain's information:
        Name
        Team name (country)
        Email
        Phone Number
*/
class AddCaptainForm extends Component {
    getCountries() {
        const iso3311a2 = require('iso-3166-1-alpha-2');
        const countriesArray = iso3311a2.getCountries();
        const countriesMap= _.fromPairs(countriesArray.map(input => [input, null]));
        return countriesMap;
    }
    render() {
        return (
            <div>
                <h5><i className="material-icons left">person</i>Add Captain Information</h5>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="row">
                        <div className="col s6">
                            <Field fieldName="First Name"
                                component={ FormInputField } 
                                id="firstName"
                                type="text"
                                name="firstName" />
                        </div>
                        <div className="col s6">
                            <Field fieldName="Last Name"
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
                                data={this.getCountries()}
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
                                id="email"
                                type="text"
                                name="email" /> 
                        </div>
                        <div className="col s6">
                            <Field fieldName="Phone"
                                component={ FormPhone }
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

export default reduxForm({
    // validate,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    form: 'addTeamForm'
})(AddCaptainForm);