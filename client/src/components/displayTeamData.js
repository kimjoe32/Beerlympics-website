import React, { Component } from 'react';
import ReactCountryFlag from 'react-country-flag';
import '../css/displayTeamData.css';

class DisplayTeamData extends Component {

    /*
        render a table displaying data for a single team
    */
    render() {
        return (
            <tr className="hoverable" key={this.props.teamName} >
                <td id="teamNameCell">{this.getFlag()}<div id="teamNameText">{this.props.teamName}</div></td>
                <td>{this.prettifyTeamMembers()}</td>
                <td>{this.props.wins}/{this.props.losses}</td>
                <td>{this.props.standing}</td>
            </tr>
        )
    }

    /*
        Format list of team members to look nice
        TODO: mark who is team captain (if captains are even needed);
    */
    prettifyTeamMembers() {
        return (
            <ul>
                {this.props.teamMembers.map((teamMember) => {
                    return (<li key={teamMember}>{teamMember}</li>)
                })}
            </ul>
        )
    }

    /*
        Get the flag for the team
        NOTE: "Germany" is a placeholder
    */
    getFlag() {
        var isoCountryCodes = require('iso-3166-1-alpha-2'); //translating iso code
        const countryName = isoCountryCodes.getCode("Germany"); //this.props.teamName;
        return (
            <ReactCountryFlag code={countryName} svg flagProps={{fontSize: "4vw",}}/>
        )
    }
}

export default DisplayTeamData;