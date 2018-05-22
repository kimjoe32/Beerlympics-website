import React, { Component } from 'react';
import DisplayAllTeamsData from '../containers/displayAllTeamsData';
import DisplayEventData from './EventsComponents/displayEventData';

/*
    Shows:
        Team data (name, team members, wins, etc)
        Events: upcoming events (beer pong, etc.)
*/
class DisplayAllData extends Component {
    render () {
        return (
        <div>
            <DisplayAllTeamsData />
            <DisplayEventData />
        </div>
        );
    }
}

export default DisplayAllData;