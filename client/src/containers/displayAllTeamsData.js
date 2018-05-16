import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayTeamData from '../components/displayTeamData';
import '../css/displayAllTeamsData.css';
import { getTeamData } from '../actions/index';
import { bindActionCreators } from 'redux';

class DisplayAllTeamsData extends Component {
    componentDidMount() {
        this.props.getTeamData();
    }

    renderData(team) {
        if (!team) return;
        return (
            <DisplayTeamData key={team.teamName}
                teamName={team.teamName} 
                teamMembers={team.teamMembers}
                wins={team.wins}
                losses={team.losses}
                standing={team.standing}
            />
        );
    }

    render() {
        return (
            <table className="table_headers">
                <thead>
                    <tr className="blue white-text">
                        <th>Team</th>
                        <th>Members</th>
                        <th>W/L</th>
                        <th>Standing</th>
                    </tr>
                </thead>
                <tbody className="white">
                    {this.props.allTeamsData.map(this.renderData)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ allTeamsData }) {
    return { allTeamsData };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getTeamData }, dispatch);
}
/*
    Connect component to mapSTP
    Export the component combined with the reducer
*/
export default connect(mapStateToProps, mapDispatchToProps)(DisplayAllTeamsData);