import React, { Component } from 'react';
import DisplayAllTeamsData from '../containers/displayAllTeamsData';
import DisplayEventData from './EventsComponents/displayEventData';

/*
    Shows:
        Team data (name, team members, wins, etc)
        Events: upcoming events (beer pong, etc.)
*/
const dvdrStyle = {
    marginTop:"5px",
    marginBottom: "5px",
}
class DisplayAllData extends Component {
    render () {
        return (
        <div>
            <DisplayAllTeamsData />
            <div className="divider" style={ dvdrStyle }/>
            <DisplayEventData />
        </div>
        );
    }
}

export default DisplayAllData;