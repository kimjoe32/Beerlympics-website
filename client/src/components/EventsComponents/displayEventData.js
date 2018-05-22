import React, { Component } from 'react';
import DisplayEventCards from '../../containers/EventsContainers/displayEventCards';

class DisplayEventData extends Component {
    render() {
        return(
            <div className="row">
            <div className="col s4">
                <DisplayEventCards />
            </div>
            <div className="col s8 blue">
                <span> event bracketing </span>
            </div>
            </div>
        );
    }
}

export default DisplayEventData;